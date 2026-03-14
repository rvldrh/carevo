import ChangePasswordIllustration from "@/features/auth/components/reset-password/components/change-password-illustration"
import ChangePasswordForm from "@/features/auth/components/reset-password/components/change-password-form"

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EFF8FF] to-[#4298D5] px-6">

      <div className="w-full max-w-[1000px] flex">
        <div className="w-full md:w-[420px] bg-white rounded-[20px] md:rounded-r-none shadow-lg flex items-center justify-center px-8 py-10 md:px-12">

          <ChangePasswordForm />

        </div>

        <div className="hidden md:flex flex-1 items-center justify-center bg-[#C9CCF5] rounded-r-[20px]">

          <ChangePasswordIllustration />

        </div>

      </div>

    </div>
  )
}