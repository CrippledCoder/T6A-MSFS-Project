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
struct sAttitudeVars
{
	// SimVar descriptors
	ENUM m_eDegrees;
	ENUM m_eMeters;
	ENUM m_eAttitudeIndicatorPitchDegrees;
	ENUM m_eAttitudeIndicatorBankDegrees;
	ENUM m_eAttitudeIndicatorAltitudeMeters;
};
struct sAttitudeGraphics
{
	// GDI+ 
	int winWidth;
	int winHeight;
	StringFormat stringFormatRight;
	SolidBrush brushSky;
	SolidBrush brushGround;
	Pen penIndicator;
	SolidBrush brushIndicator;
	SolidBrush brushWhite;
	// GDI+ resolution-dependent elements
	Pen* penContourWhite;
	Pen* penTextWhite;
	RectF* regionAttitude;
	RectF* regionIndicatorLeft;
	RectF* regionIndicatorSymbolLeft;
	RectF* regionIndicatorRight;
	Font* font;

	sAttitudeGraphics() :
		winWidth(0),
		winHeight(0),
		brushSky(Color(0, 191, 255)),
		brushGround(Color(210, 105, 30)),
		penIndicator(Color(255, 255, 0), 15.f),
		brushIndicator(Color(255, 255, 0)),
		brushWhite(Color::White),
		regionAttitude(NULL),
		regionIndicatorLeft(NULL),
		regionIndicatorSymbolLeft(NULL),
		regionIndicatorRight(NULL),
		penContourWhite(NULL),
		penTextWhite(NULL)
	{
		stringFormatRight.SetLineAlignment(StringAlignment::StringAlignmentCenter);
		stringFormatRight.SetAlignment(StringAlignment::StringAlignmentFar);
		font = NULL;

	}

	void SetSize(int newWinWidth, int newWinHeight) {

		if (winWidth != newWinWidth || winHeight != newWinHeight)
		{
			winWidth = newWinWidth;
			winHeight = newWinHeight;

			float fR = (float)min(winWidth, winHeight) * 0.5f;
			if (regionAttitude != NULL)
				delete (regionAttitude);
			regionAttitude = new RectF(winWidth * 0.1f, winHeight * 0.1f, winWidth * 0.8f, winHeight * 0.8f);

			if (regionIndicatorLeft != NULL)
				delete (regionIndicatorLeft);
			regionIndicatorLeft = new RectF(winWidth * 0.05f, winHeight * 0.4f, winWidth * 0.2f, winHeight * 0.2f);
			if (regionIndicatorSymbolLeft != NULL)
				delete (regionIndicatorRight);
			regionIndicatorSymbolLeft = new RectF(winWidth * 0.22f, winHeight * 0.48f, winHeight * 0.02f, winHeight * 0.02f);

			if (regionIndicatorRight != NULL)
				delete (regionIndicatorRight);
			regionIndicatorRight = new RectF(winWidth * 0.75f, winHeight * 0.4f, winWidth * 0.2f, winHeight * 0.2f); 
			
			if (font != NULL)
				delete (font);
			font = new Font(L"sans", L"./data/Roboto-Regular.ttf", fR * 0.2f, 10);

			if (penContourWhite != NULL)
				delete (penContourWhite);
			penContourWhite = new Pen(Color::White, 0.1f * fR);

			if (penTextWhite != NULL)
				delete (penTextWhite);
			penTextWhite = new Pen(Color::White, 0.01f * fR);
		}
	}
	void Release() {
		delete(regionAttitude);
		delete(regionIndicatorLeft);
		delete(regionIndicatorRight);
		delete(font);
		delete(penContourWhite);
	}
};

sAttitudeVars g_AttitudeVars;
sAttitudeGraphics g_AttitudeGraphics;
std::map < FsContext, Graphics*> g_AttitudeGDIcontext;

// ------------------------
// Callbacks
extern "C" {

	MSFS_CALLBACK bool Attitude_gauge_callback(FsContext ctx, int service_id, void* pData)
	{
		switch (service_id)
		{
		case PANEL_SERVICE_PRE_INSTALL:
		{
			sGaugeInstallData* p_install_data = (sGaugeInstallData*)pData;
			// Width given in p_install_data->iSizeX
			// Height given in p_install_data->iSizeY
			g_AttitudeVars.m_eDegrees = get_units_enum("DEGREES");
			g_AttitudeVars.m_eMeters = get_units_enum("METERS");
			g_AttitudeVars.m_eAttitudeIndicatorPitchDegrees = get_aircraft_var_enum("ATTITUDE INDICATOR PITCH DEGREES");
			g_AttitudeVars.m_eAttitudeIndicatorBankDegrees = get_aircraft_var_enum("ATTITUDE INDICATOR BANK DEGREES");
			g_AttitudeVars.m_eAttitudeIndicatorBankDegrees = get_aircraft_var_enum("ATTITUDE INDICATOR BANK DEGREES");
			g_AttitudeVars.m_eAttitudeIndicatorAltitudeMeters = get_aircraft_var_enum("INDICATED ALTITUDE");
			
			//initialize the resolution dependent components
			g_AttitudeGraphics.SetSize(p_install_data->iSizeX, p_install_data->iSizeY);

			return true;
		}
		break;
		case PANEL_SERVICE_POST_INSTALL:
		{
			g_AttitudeGDIcontext[ctx] = new Graphics(ctx);
			return true;
		}
		break;
		case PANEL_SERVICE_PRE_DRAW:
		{
			sGaugeDrawData* p_draw_data = (sGaugeDrawData*)pData;
			FLOAT64 fPitch = aircraft_varget(g_AttitudeVars.m_eAttitudeIndicatorPitchDegrees, g_AttitudeVars.m_eDegrees, 0);
			FLOAT64 fBank = aircraft_varget(g_AttitudeVars.m_eAttitudeIndicatorBankDegrees, g_AttitudeVars.m_eDegrees, 0);
			FLOAT64 fAttitude = aircraft_varget(g_AttitudeVars.m_eAttitudeIndicatorAltitudeMeters, g_AttitudeVars.m_eMeters, 0);
			float fSize = sqrt(p_draw_data->winWidth * p_draw_data->winWidth + p_draw_data->winHeight * p_draw_data->winHeight) * 1.1f;
			float pxRatio = (float)p_draw_data->fbWidth / (float)p_draw_data->winWidth;

			g_AttitudeGraphics.SetSize(p_draw_data->winWidth, p_draw_data->winHeight);

			Graphics* gfx = g_AttitudeGDIcontext[ctx];
			// frame (requires to be explicitly started given backend constraints)
			gfx->StartFrame(p_draw_data->winWidth, p_draw_data->winHeight, pxRatio);
			{
				// reset
				gfx->Clear(Color::Black);
				gfx->ResetTransform();

				// non-rectangular clip
				GraphicsPath clip;
				clip.AddEllipse(*g_AttitudeGraphics.regionAttitude);
				gfx->SetClip(&clip);
				gfx->SetClip(*g_AttitudeGraphics.regionIndicatorLeft, CombineMode::CombineModeExclude);
				gfx->SetClip(*g_AttitudeGraphics.regionIndicatorRight, CombineMode::CombineModeExclude);
				// clipped drawing
				{
					// Center
					gfx->TranslateTransform(p_draw_data->winWidth * 0.5f, p_draw_data->winHeight * 0.5f);
					// Rotate using Bank
					gfx->RotateTransform(fBank);
					// Level
					float fH = fSize * 0.5f * (1.0f - sin(fPitch * M_PI / 180.0f));
					// draw sky
					gfx->FillRectangle(&g_AttitudeGraphics.brushSky, -fSize * 0.5f, -fSize * 0.5f, fSize, fH);
					// draw ground
					gfx->FillRectangle(&g_AttitudeGraphics.brushGround, -fSize / 2, -fSize / 2 + fH, fSize, fSize - fH);

					// Indicator
					gfx->ResetTransform();
					// go to center
					gfx->TranslateTransform(p_draw_data->winWidth * 0.5f, p_draw_data->winHeight * 0.5f);
					GraphicsPath indicator;
					// Draw indicator
					float arcRadius = p_draw_data->winWidth * 0.05f;
					indicator.AddLine(arcRadius, 0.f, p_draw_data->winWidth * 0.2f, 0.f);
					indicator.AddArc(-arcRadius, -arcRadius, arcRadius * 2, arcRadius * 2, 0, 180.f);
					indicator.AddLine(-p_draw_data->winWidth * 0.2f, 0.f, -arcRadius, 0.f);
					gfx->DrawPath(&g_AttitudeGraphics.penIndicator, &indicator);
					// Draw indicator circle
					float radius = p_draw_data->winWidth * 0.05f;
					gfx->FillEllipse(&g_AttitudeGraphics.brushIndicator, -radius / 2, -radius / 2, radius, radius);

					// Draw outline using clip
					gfx->ResetTransform();
					gfx->DrawEllipse(g_AttitudeGraphics.penContourWhite, *g_AttitudeGraphics.regionAttitude);
					gfx->DrawRectangle(g_AttitudeGraphics.penContourWhite, *g_AttitudeGraphics.regionIndicatorLeft);
					gfx->DrawRectangle(g_AttitudeGraphics.penContourWhite, *g_AttitudeGraphics.regionIndicatorRight);

				}
				gfx->ResetClip();

				// Draw labels for pitch / attitude
				WCHAR cNumber[9];
				swprintf(cNumber, 9, L"%.1f   ", fPitch);
				gfx->DrawString(cNumber, 5, g_AttitudeGraphics.font, *g_AttitudeGraphics.regionIndicatorLeft, &g_AttitudeGraphics.stringFormatRight, &g_AttitudeGraphics.brushWhite);
				gfx->DrawEllipse(g_AttitudeGraphics.penTextWhite, *g_AttitudeGraphics.regionIndicatorSymbolLeft);
				swprintf(cNumber, 9, L" %.1f feet", fAttitude/1000.f);
				gfx->DrawString(cNumber, 5, g_AttitudeGraphics.font, *g_AttitudeGraphics.regionIndicatorRight, &g_AttitudeGraphics.stringFormatRight, &g_AttitudeGraphics.brushWhite);
			}
			gfx->Flush();
			return true;
		}
		break;
		case PANEL_SERVICE_PRE_KILL:
		{
			g_AttitudeGraphics.Release();
			delete (g_AttitudeGDIcontext[ctx]);
			g_AttitudeGDIcontext.erase(ctx);

			return true;
		}
		break;
		}
		return false;
	}

}
