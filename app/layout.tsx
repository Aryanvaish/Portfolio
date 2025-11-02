import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan's portfolio",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Aryan's portfolio</title>
        <link rel="icon" href="/favicon.svg" type="image/png" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
