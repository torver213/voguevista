import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import AppThemeContext from "@/contexts/AppThemeContext";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// image preview
import 'react-photo-view/dist/react-photo-view.css';
import "intersection-observer";


export const metadata: Metadata = {
  title: "Vogue-Vista",
  description: "Home of modeling & creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider>
        <AppThemeContext>
          {children}
        </AppThemeContext>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
