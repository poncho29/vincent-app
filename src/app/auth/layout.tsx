import type { Metadata } from "next";

import { AuthProvider } from "@/context";

export const metadata: Metadata = {
  title: "Login - Fundación Vincent",
  description: "Únete a nosotros en nuestra misión de salvar vidas peludas y encontrar hogares llenos de amor.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <main className="w-ful h-screen flex items-center justify-center">
        { children }
      </main>
    </AuthProvider>
  );
}
