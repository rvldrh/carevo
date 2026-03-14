import ChangePasswordIllustration from "@/features/auth/components/reset-password/components/change-password-illustration";
import ChangePasswordFormClient from "@/features/auth/components/reset-password/components/change-password-form";

export default function ChangePasswordLayout() {
  return (
    <div className="flex-1 bg-white rounded-[20px] md:rounded-r-[20px] flex items-center justify-center px-6 py-10 md:px-12 lg:px-16">
      <div className="w-full max-w-[393px]">

        <ChangePasswordIllustration />

        <h1 className="text-center text-[20px] font-bold text-black mb-8">
          Ubah Kata Sandi
        </h1>

        <ChangePasswordFormClient />

      </div>
    </div>
  );
}