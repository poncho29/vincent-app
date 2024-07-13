import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Fundación Vincent",
  description: "Únete a nosotros en nuestra misión de salvar vidas peludas y encontrar hogares llenos de amor.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-ful h-screen flex items-center justify-center">
      { children }
    </main>
  );
}
