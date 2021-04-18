// Copyright (c) Asobo Studio, All rights reserved. www.asobostudio.com

#include <MSFS\MSFS.h>
#include <gdiplus\GdiPlus.h>
#include <MSFS\Legacy\gauges.h>

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <map>

#ifdef _MSC_VER
#define snprintf _snprintf_s
#elif !defined(__MINGW32__)
#include <iconv.h>
#endif

using namespace Gdiplus;

struct sCompassVars
{
	// SimVar descriptors
	ENUM m_eDegrees;
	ENUM m_ePlaneHeadingDegreesTrue;
};


struct sCompassGraphics
{
	// GDI+ 
	int iWinWidth;
	int iWinHeight;
	StringFormat stringFormatCentered;
	Pen penWhite;
	SolidBrush brushWhite;
	HatchBrush brushGray;
	// GDI+ resolution-dependent elements
	float fRadius;
	Font* hFontLarge;
	Font* hFontSmall;
	PointF* hPointsPlane;

	sCompassGraphics() :
		iWinWidth(0),
		iWinHeight(0),
		brushWhite(Color::White),
		brushGray(HatchStyle::HatchStyleOutlinedDiamond, Color::Gray, Color::Black),
		penWhite(Color::White, 2.0f),
		hPointsPlane(NULL)

	{
		stringFormatCentered.SetLineAlignment(StringAlignment::StringAlignmentFar);
		stringFormatCentered.SetAlignment(StringAlignment::StringAlignmentCenter);
		hFontSmall = NULL;
		hFontLarge = NULL;
	}

	void SetSize(int newWinWidth, int newWinHeight) {

		if (iWinWidth != newWinWidth || iWinHeight != newWinHeight)
		{
			iWinWidth = newWinWidth;
			iWinHeight = newWinHeight;
			float fSize = (float)min(iWinWidth, iWinHeight);
			fRadius = fSize * 0.5f;

			if (hFontLarge != NULL) {
				delete (hFontLarge);
			}
			hFontLarge = new Font(L"sans", L"./data/Roboto-Regular.ttf", fRadius * 0.35f, 10);
			if (hFontSmall != NULL) {
				delete (hFontSmall);
			}
			hFontSmall = new Font(L"sans", L"./data/Roboto-Regular.ttf", fRadius * 0.20f, 10);

			if (hPointsPlane != NULL)
			{
				delete[](hPointsPlane);
			}
			// Plane
			hPointsPlane = new PointF[15]{
				PointF(0, fRadius * -0.5f),
				PointF(fRadius * 0.05f, fRadius * -0.4f),
				PointF(fRadius * 0.05f, fRadius * -0.2f),
				PointF(fRadius * 0.4f, fRadius * -0.05f),
				PointF(fRadius * 0.4f, fRadius * 0.05f),
				PointF(fRadius * 0.05f, fRadius * 0.05f),
				PointF(fRadius * 0.05f, fRadius * 0.3f),
				PointF(fRadius * 0.2f, fRadius * 0.4f),
				PointF(fRadius * -0.2f, fRadius * 0.4f),
				PointF(fRadius * -0.05f, fRadius * 0.3f),
				PointF(fRadius * -0.05f, fRadius * 0.05f),
				PointF(fRadius * -0.4f, fRadius * 0.05f),
				PointF(fRadius * -0.4f, fRadius * -0.05f),
				PointF(fRadius * -0.05f, fRadius * -0.2f),
				PointF(fRadius * -0.05f, fRadius * -0.4f)
			};
		}
	}
	void Release() {
		delete(hFontLarge);
		delete(hFontSmall);
		delete(hPointsPlane);
	}
};
sCompassVars g_CompassVars;
sCompassGraphics g_CompassGraphics;
std::map < FsContext, Graphics*> g_CompassGDIcontext;

// ------------------------
// Callbacks
extern "C" {

	MSFS_CALLBACK bool Compass_gauge_callback(FsContext ctx, int service_id, void* pData)
	{
		switch (service_id)
		{
		case PANEL_SERVICE_PRE_INSTALL:
		{
			sGaugeInstallData* p_install_data = (sGaugeInstallData*)pData;
			// Width given in p_install_data->iSizeX
			// Height given in p_install_data->iSizeY
			g_CompassVars.m_eDegrees = get_units_enum("DEGREES");
			g_CompassVars.m_ePlaneHeadingDegreesTrue = get_aircraft_var_enum("PLANE HEADING DEGREES TRUE");

			//initialize the resolution dependent components
			g_CompassGraphics.SetSize(p_install_data->iSizeX, p_install_data->iSizeY);

			return true;
		}
		break;
		case PANEL_SERVICE_POST_INSTALL:
		{
			g_CompassGDIcontext[ctx] = new Graphics(ctx);
			return true;
		}
		break;
		case PANEL_SERVICE_PRE_DRAW:
		{
			sGaugeDrawData* p_draw_data = (sGaugeDrawData*)pData;
			FLOAT64 fHeading = aircraft_varget(g_CompassVars.m_ePlaneHeadingDegreesTrue, g_CompassVars.m_eDegrees, 0);
			float fSize = (float)min(p_draw_data->winWidth, p_draw_data->winHeight);
			float pxRatio = (float)p_draw_data->fbWidth / (float)p_draw_data->winWidth;

			Graphics* gfx = g_CompassGDIcontext[ctx];

			g_CompassGraphics.SetSize(p_draw_data->winWidth, p_draw_data->winHeight);

			gfx->StartFrame(p_draw_data->winWidth, p_draw_data->winHeight, pxRatio);
			{
				gfx->ResetTransform();

				// Black background
				gfx->Clear(Color::Black);
				// Center
				gfx->TranslateTransform(p_draw_data->winWidth * 0.5f, p_draw_data->winHeight * 0.5f);
				// 8 fixed Ticks
				float fR1 = g_CompassGraphics.fRadius * 0.95f;
				float fR2 = g_CompassGraphics.fRadius * 0.99f;
				for (int i = 0; i < 360; i += 45)
				{
					float fRads = i * M_PI / 180;
					gfx->DrawLine(&g_CompassGraphics.penWhite, fR1 * cosf(fRads), fR1 * sinf(fRads), fR2 * cosf(fRads), fR2 * sinf(fRads));
				}

				gfx->FillPolygon(&g_CompassGraphics.brushGray, g_CompassGraphics.hPointsPlane, 15);
				gfx->DrawPolygon(&g_CompassGraphics.penWhite, g_CompassGraphics.hPointsPlane, 15);

				// 72 rotating Ticks
				gfx->RotateTransform(-fHeading);

				float fRS1 = g_CompassGraphics.fRadius * 0.90f;
				float fRS2 = g_CompassGraphics.fRadius * 0.95f;
				float fRB1 = g_CompassGraphics.fRadius * 0.85f;
				float fRB2 = g_CompassGraphics.fRadius * 0.95f;
				for (int i = 0; i < 360; i += 5)
				{
					float fRads = i * M_PI / 180;
					if (i % 10 == 0)
					{
						gfx->DrawLine(&g_CompassGraphics.penWhite, fRB1 * cosf(fRads), fRB1 * sinf(fRads), fRB2 * cosf(fRads), fRB2 * sinf(fRads));
					}
					else
					{
						gfx->DrawLine(&g_CompassGraphics.penWhite, fRS1 * cosf(fRads), fRS1 * sinf(fRads), fRS2 * cosf(fRads), fRS2 * sinf(fRads));
					}
				}

				// Text
				float fRT = g_CompassGraphics.fRadius * 0.7f;

				Matrix transform;
				gfx->GetTransform(&transform);

				Font* font;
				for (int iDeg = 0; iDeg < 360; iDeg += 30)
				{
					if (iDeg % 90 == 0)
						font = g_CompassGraphics.hFontLarge;
					else
						font = g_CompassGraphics.hFontSmall;

					WCHAR cNumber[5];
					switch (iDeg)
					{
					case 0:
						wcscpy(cNumber, L"N");
						break;
					case 90:
						wcscpy(cNumber, L"E");
						break;
					case 180:
						wcscpy(cNumber, L"S");
						break;
					case 270:
						wcscpy(cNumber, L"W");
						break;
					default:
						swprintf(cNumber, 5, L"%i", iDeg / 10);
						break;
					}

					gfx->RotateTransform(iDeg);
					gfx->TranslateTransform(0, fRT);
					gfx->DrawString(cNumber, 5, font, RectF(-g_CompassGraphics.fRadius * 0.175f, -g_CompassGraphics.fRadius * 0.175f, g_CompassGraphics.fRadius * 0.35f, g_CompassGraphics.fRadius * 0.35f), &g_CompassGraphics.stringFormatCentered, &g_CompassGraphics.brushWhite);

					// reset transform
					gfx->SetTransform(&transform);
				}
			}
			gfx->Flush();

			return true;
		}
		break;
		case PANEL_SERVICE_PRE_KILL:
		{
			g_CompassGraphics.Release();
			delete (g_CompassGDIcontext[ctx]);
			g_CompassGDIcontext.erase(ctx);

			return true;
		}
		break;
		}
		return false;
	}

}
