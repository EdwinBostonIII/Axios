import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
