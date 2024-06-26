import type { Metadata } from "next";
import { Montserrat, Mochiy_Pop_One } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const mochiyPopOne = Mochiy_Pop_One({
  subsets: ["latin"],
  variable: "--font-mochiypopone",
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Fundación Vincent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${mochiyPopOne.variable}`}
    >
      <body>
        { children }
      </body>
    </html>
  );
}
