import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheldon Stephen — Systems Dossier",
  description:
    "Portfolio of Sheldon Stephen (Don), final-year IT student at Universiti Teknologi PETRONAS and Business Analyst intern at SAINS, Kuching.",
  metadataBase: new URL("https://donden.my"),
  openGraph: {
    title: "Sheldon Stephen — Systems Dossier",
    description:
      "Business analysis, systems prototyping, and applied R&D work — filed and indexed.",
    url: "https://donden.my",
    siteName: "donden.my",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
