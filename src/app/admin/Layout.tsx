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

        <div className="w-full h-screen overflow-x-hidden overflow-y-auto">
          { children }
        </div>
      </main>

      <Toaster position="bottom-right" />
    </AuthProvider>
  );
}
