import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginUserBodyType } from "@/features/auth/schemas/auth.schema";

interface Props {
  register: UseFormRegister<LoginUserBodyType>;
  errors: FieldErrors<LoginUserBodyType>;
}

export default function LoginFields({ register, errors }: Props) {
  return (
    <>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full h-[53px] px-9 rounded-xl border border-gray-400"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Kata Sandi"
          {...register("password")}
          className="w-full h-[53px] px-8 rounded-xl border border-gray-400"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            {errors.password.message}
          </p>
        )}
      </div>
    </>
  );
}