import { FieldErrors, UseFormRegister } from "react-hook-form"
import { z } from "zod"
import { RegisterUserBody } from "@carevo/contracts/zod"

type RegisterFormValues = z.infer<typeof RegisterUserBody>

interface Props {
  register: UseFormRegister<RegisterFormValues>
  errors: FieldErrors<RegisterFormValues>
}

export default function RegisterFields({ register, errors }: Props) {
  return (
    <>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
        />

        {errors.username && (
          <span className="text-red-500 text-xs mt-1">
            Username harus 3-30 karakter dan hanya boleh huruf, angka, - atau _
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
        />

        {errors.email && (
          <span className="text-red-500 text-xs mt-1">
            Format email tidak valid
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Kata Sandi"
          {...register("password")}
          className="w-full h-[53px] rounded-[12px] border border-[#232323] px-8"
        />

        {errors.password && (
          <span className="text-red-500 text-xs mt-1">
            Password minimal 8 karakter
          </span>
        )}
      </div>
    </>
  )
}