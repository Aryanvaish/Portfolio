import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Vaish | Frontend Engineer — React.js, Next.js, TypeScript",
  description:
    "Portfolio of Aryan Vaish — Frontend Engineer specializing in React.js, Next.js, and TypeScript. Building fast, accessible, and modern web experiences.",
  keywords: [
    "Aryan Vaish",
    "Frontend Developer Delhi",
    "React.js Developer",
    "Next.js Engineer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Aryan Vaish", url: "https://aryanvaish-portfolio.vercel.app" }],
  creator: "Aryan Vaish",
  publisher: "Aryan Vaish",
  metadataBase: new URL("https://aryanvaish-portfolio.vercel.app"),
  alternates: {
    canonical: "https://aryanvaish-portfolio.vercel.app",
  },
  openGraph: {
    title: "Aryan Vaish | Frontend Engineer",
    description:
      "Frontend Engineer crafting smooth, responsive, and visually rich experiences using React.js, Next.js, and TypeScript.",
    url: "https://aryanvaish-portfolio.vercel.app",
    siteName: "Aryan Vaish Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aryan Vaish Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Vaish | Frontend Engineer",
    description:
      "Frontend Engineer crafting smooth, responsive, and visually rich experiences using React.js, Next.js, and TypeScript.",
    images: ["/og.png"],
    creator: "@aryanvaish",
  },
  themeColor: "#0a0a0a",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "HgakUICHBnW72ZIo1G7K_1wHpdXpEXhlnmsNosPavRU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Vaish",
              url: "https://aryanvaish-portfolio.vercel.app",
              jobTitle: "Frontend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "The Indian Express",
              },
              sameAs: [
                "https://www.linkedin.com/in/aryanvaish/",
                "https://github.com/Aryanvaish",
              ],
            }),
          }}
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
