import { UseFormRegister } from "react-hook-form";
import { LoginUserBodyType } from "@/features/auth/schemas/auth.schema";

interface Props {
  register: UseFormRegister<LoginUserBodyType>;
}

export default function LoginFields({ register }: Props) {
  return (
    <>
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="w-full h-[53px] px-9 rounded-xl border border-gray-400"
      />

      <input
        type="password"
        placeholder="Kata Sandi"
        {...register("password")}
        className="w-full h-[53px] px-8 rounded-xl border border-gray-400"
      />
    </>
  );
}