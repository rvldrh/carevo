import LoginOptionCard from "@/features/auth/components/after-logout/login-option-card";

export default function LoginOptions() {
  return (
    <div className="w-full max-w-xl flex flex-col gap-4">

      <LoginOptionCard
        variant="google"
        name="Bagas"
        email="bagasui@gmail.com"
      />

      <LoginOptionCard
        variant="email"
        name="Bagas"
        email="bagasui@gmail.com"
      />

    </div>
  );
}