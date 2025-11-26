import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "AXIOS Tea Company | Premium Artisan Chai",
  description: "Premium artisan spiced black teas for those who demand excellence from their morning ritual. Bold, complex chai crafted for coffee converts.",
  keywords: "chai tea, artisan tea, premium tea, spiced tea, coffee alternative, loose leaf tea",
  openGraph: {
    title: "AXIOS Tea Company | Premium Artisan Chai",
    description: "Premium artisan spiced black teas for those who demand excellence from their morning ritual.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
