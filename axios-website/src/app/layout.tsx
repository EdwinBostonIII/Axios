import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${cinzel.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
