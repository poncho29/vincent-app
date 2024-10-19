import { LoginForm } from "@/sections";

export default function LoginPage() {

  return (
    <div className="w-[400px] h-auto p-6 bg-slate-200 shadow-lg rounded-xl">
      <h1 className="title mb-6">Bienvenido</h1>

      <LoginForm />
    </div>
  );
}