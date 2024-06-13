import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";

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
    <>
      <Header />

      { children }

      <Footer />
    </>
  );
}
