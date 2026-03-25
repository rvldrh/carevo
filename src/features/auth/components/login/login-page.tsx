import LoginForm from "@/features/auth/components/login/login-form";
import LoginIllustration from "@/features/auth/components/login/login-illustration";
import { useEmailVerification } from "@/features/auth/hooks/use-email-verification";
import { Suspense } from "react";

export default function LoginPage() {
  const { loading } = useEmailVerification();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sky-blue-light flex items-center justify-center px-4 py-8">
      <div
        className="absolute pointer-events-none"
        style={{
          width: 479,
          height: 453,
          borderRadius: "50%",
          background: "#C8CEFC",
          left: -154,
          bottom: -100,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: 479,
          height: 453,
          borderRadius: "50%",
          background: "#4E61F6",
          right: -100,
          top: -200,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
        {loading && <div>Verifying...</div>}
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        <LoginIllustration />
      </div>
    </div>
  );
}
