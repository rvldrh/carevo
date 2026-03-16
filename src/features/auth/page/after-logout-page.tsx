import AfterLogoutIllustration from "@/features/auth/components/after-logout/after-logout-illustration";
import WelcomeHeader from "@/features/auth/components/after-logout/welcome-header";
import LoginOptions from "@/features/auth/components/after-logout/login-option";
import Image from "next/image";

export default function AfterLogoutPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-sky-200 relative overflow-hidden flex items-center justify-center">

      <AfterLogoutIllustration />

      <div className="max-w-3xl w-full flex flex-col items-center gap-8 px-6">

        <Image
          src="/illustration/tengah.svg"
          alt="illustration"
          width={369}
          height={227}
        />

        <WelcomeHeader />

        <LoginOptions />

      </div>

    </main>
  );
}