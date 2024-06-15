import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Fundación Vincent",
  description: "Únete a nosotros en nuestra misión de salvar vidas peludas y encontrar hogares llenos de amor.",
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
