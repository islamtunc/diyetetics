// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain


import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";

import Alert from 'react-bootstrap';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DİYETİSYEN ROJDA MUSA",
    default: " DİYETİSYEN ROJDA MUSA",
  },
  description: " Diyetisyen Rojda Musa'nın kişisel web sitesi",
  keywords: ["Diyetisyen", "Rojda Musa", "Kişisel Web Sitesi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body  style={{
    background: "#0f2027", // Koyu mavi ton
    color: "#ffffff", // Yazı rengini beyaz yapın
  }} className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >



              {children}

          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
      
    </html>
  );
}
