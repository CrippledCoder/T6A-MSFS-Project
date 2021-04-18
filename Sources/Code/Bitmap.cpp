// Copyright (c) Asobo Studio, All rights reserved. www.asobostudio.com

#include <MSFS\MSFS.h>
#include <gdiplus\GdiPlus.h>
#include <MSFS\Legacy\gauges.h>

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <map>

using namespace Gdiplus;

struct sBitmapVars
{
};


struct sBitmapGraphics
{
	// GDI+ 
	Graphics* gfx;
	int iWinWidth;
	int iWinHeight;

	Bitmap* imageLogo;
	Bitmap* imageDrawing;

	sBitmapGraphics() :
		iWinWidth(0),
		iWinHeight(0)
	{
	}

	void Load(Graphics* newGfx) {
		if (newGfx != gfx) {
			gfx = newGfx;
		}
		imageLogo = new Bitmap(gfx, L"./data/images/FSLogo.png");

		imageDrawing = new Bitmap(256, 128);
		// Modifies the generated bitmap
		// NOTE: this operation is computationally expensive, as it requires to regenerate the Bitmap
		for (int x = 0; x < 256; ++x) {
			imageDrawing->SetPixel(x, (x*2) % 64, Color::Red);
			imageDrawing->SetPixel(x, (32 + x*2) % 64, Color::Blue);
		}

	}
	void SetSize(int newWinWidth, int newWinHeight) {

		if (iWinWidth != newWinWidth || iWinHeight != newWinHeight)
		{
			iWinWidth = newWinWidth;
			iWinHeight = newWinHeight;
		}
	}

	void Release() {
		delete (imageLogo);
		delete (imageDrawing);
	}
};
static sBitmapVars g_BitmapVars;
static sBitmapGraphics g_BitmapGraphics;
static std::map < FsContext, Graphics*> g_BitmapGDIcontext;

// ------------------------
// Callbacks
extern "C" {

	MSFS_CALLBACK bool Bitmap_gauge_callback(FsContext ctx, int service_id, void* pData)
	{
		switch (service_id)
		{
		case PANEL_SERVICE_PRE_INSTALL:
		{
			sGaugeInstallData* p_install_data = (sGaugeInstallData*)pData;

			//initialize the resolution dependent components
			g_BitmapGraphics.SetSize(p_install_data->iSizeX, p_install_data->iSizeY);
			return true;
		}
		break;
		case PANEL_SERVICE_POST_INSTALL:
		{
			g_BitmapGDIcontext[ctx] = new Graphics(ctx);
			// load the elements that depend on a graphical context
			g_BitmapGraphics.Load(g_BitmapGDIcontext[ctx]);
			return true;
		}
		break;
		case PANEL_SERVICE_PRE_DRAW:
		{
			sGaugeDrawData* p_draw_data = (sGaugeDrawData*)pData;
			float fSize = (float)min(p_draw_data->winWidth, p_draw_data->winHeight);
			float pxRatio = (float)p_draw_data->fbWidth / (float)p_draw_data->winWidth;

			Graphics* gfx = g_BitmapGDIcontext[ctx];

			g_BitmapGraphics.SetSize(p_draw_data->winWidth, p_draw_data->winHeight);

			gfx->StartFrame(p_draw_data->winWidth, p_draw_data->winHeight, pxRatio);
			{
				gfx->ResetTransform();

				// White background
				gfx->Clear(Color::White);

				// draw Microsoft Flight Simulator logo 
				gfx->DrawImage(g_BitmapGraphics.imageLogo, p_draw_data->winWidth * 0.1f, p_draw_data->winHeight * 0.1f, p_draw_data->winWidth * 0.8f, p_draw_data->winHeight * 0.8f);

				// Draws the logo as 4 quadrants
				PointF logoSize(g_BitmapGraphics.imageLogo->GetWidth(), g_BitmapGraphics.imageLogo->GetHeight());
				gfx->DrawImage(g_BitmapGraphics.imageLogo,
					RectF(0.f, 0.f, logoSize.X / 2, logoSize.Y / 2),
					RectF(0.f, 0.f, logoSize.X, logoSize.Y), GpUnit::UnitPixel);

				gfx->DrawImage(g_BitmapGraphics.imageLogo,
					RectF(logoSize.X / 2 + 16, 0.f, logoSize.X / 2, logoSize.Y / 2),
					RectF(logoSize.X / 2, 0.f, logoSize.X, logoSize.Y), GpUnit::UnitPixel);

				gfx->DrawImage(g_BitmapGraphics.imageLogo,
					RectF(0.f, logoSize.Y / 2 + 16, logoSize.X / 2, logoSize.Y / 2),
					RectF(0.f, logoSize.Y / 2, logoSize.X, logoSize.Y), GpUnit::UnitPixel);

				gfx->DrawImage(g_BitmapGraphics.imageLogo,
					RectF(logoSize.X / 2 + 16, logoSize.Y / 2 + 16, logoSize.X / 2, logoSize.Y / 2),
					RectF(logoSize.X / 2, logoSize.Y / 2, logoSize.X, logoSize.Y), GpUnit::UnitPixel);

				// draws bitmap generated on load
				gfx->DrawImage(g_BitmapGraphics.imageDrawing,(float)(p_draw_data->winWidth - g_BitmapGraphics.imageDrawing->GetWidth()-64),64.f);

			}
			gfx->Flush();

			return true;
		}
		break;
		case PANEL_SERVICE_PRE_KILL:
		{
			g_BitmapGraphics.Release();
			delete (g_BitmapGDIcontext[ctx]);
			g_BitmapGDIcontext.erase(ctx);

			return true;
		}
		break;
		}
		return false;
	}

}
