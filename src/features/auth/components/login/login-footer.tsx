import GoogleButton from "@/components/ui/button/button-google";
import RegisterButton from "./register-button";

interface Props {
  onGoogleClick: () => void;
}

export default function LoginFooter({ onGoogleClick }: Props) {
  return (
    <>
      <GoogleButton
        buttonText="Masuk dengan Google"
        onClick={onGoogleClick}
      />

      <RegisterButton />
    </>
  );
}