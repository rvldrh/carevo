import Link from "next/link"
import GoogleButton from "@/components/ui/button/button-google"
import RememberCheckbox from "./remember-checbox"

interface Props {
  remember: boolean
  setRemember: (value: boolean) => void
  onGoogleClick?: () => void
}

export default function RegisterFooter({ remember, setRemember, onGoogleClick }: Props) {
  return (
    <>
      <GoogleButton
        buttonText="Lanjutkan Dengan Google"
        onClick={onGoogleClick}
      />

      <div className="flex flex-col items-center gap-3 mt-5">

        <RememberCheckbox
          remember={remember}
          setRemember={setRemember}
        />

        <div className="flex items-center gap-1">
          <span className="text-[13px] font-bold text-[#77767B]">
            Sudah punya akun?
          </span>

          <Link
            href="/auth/login"
            className="text-[13px] font-extrabold text-black hover:underline"
          >
            Masuk
          </Link>

        </div>
      </div>
    </>
  )
}