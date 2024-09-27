import type { Metadata } from "next";

import toast, { Toaster } from 'react-hot-toast';

import { AuthProvider } from "@/context";

import { Sidebar } from "@/components/layout";

export const metadata: Metadata = {
  title: "Fundación Vincent Admin",
  description: "Administrador de gestión de Fundación Vincent",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <main className="w-full h-screen flex">
        <Sidebar />

        { children }
      </main>

      <Toaster position="bottom-right" />
    </AuthProvider>
  );
}
