import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Grant Thornton Kuwait - Audit, Tax & Advisory Services",
  description: "Go Beyond with Grant Thornton in Kuwait. We are a different kind of accounting and advisory firm, ready to meet the very diverse demands of today's business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/GTWalsheimLC-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GTWalsheimLC-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GTWalsheimLC-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SkipLink />
        <div id="main-content">
          {children}
        </div>
        <FloatingCTA />
      </body>
    </html>
  );
}
