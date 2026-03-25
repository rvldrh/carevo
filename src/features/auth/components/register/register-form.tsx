  "use client";

  import { useRegister } from "@/features/auth/hooks/use-register";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { RegisterUserBody } from "@carevo/contracts/zod";
  import type { z } from "zod";
  import { useState } from "react";

  import { useGoogleOAuth } from "@/features/auth/hooks/use-google-oauth";

  import RegisterFields from "@/features/auth/components/register/register-fields";
  import RegisterSubmitButton from "@/features/auth/components/register/register-submit-button";
  import RegisterDivider from "@/features/auth/components/register/register-divider";
  import RegisterFooter from "@/features/auth/components/register/register-footer";
  import { useRouter } from "next/navigation";

  type RegisterFormValues = z.infer<typeof RegisterUserBody>;

  export default function RegisterForm() {

    const router = useRouter();
    const registerMutation = useRegister();
    const { loginWithGoogle } = useGoogleOAuth(); 

    const [remember, setRemember] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<RegisterFormValues>({
      resolver: zodResolver(RegisterUserBody)
    });

 const onSubmit = async (data: RegisterFormValues) => {
    try {
      await registerMutation.mutateAsync(data);

      router.push("/auth/email-sent");

    } catch (error) {
      console.error(error);
    }
  };

    return (
      <div className="flex-1 bg-white rounded-[20px] md:rounded-l-none md:rounded-r-[20px] flex items-center justify-center px-6 py-10 md:px-12 lg:px-16">

        <div className="w-full max-w-[393px]">

          <h1 className="text-center text-[19px] font-bold text-black mb-8">
            Buat Akun Anda
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

            <RegisterFields register={register} errors={errors} />

            <RegisterSubmitButton isPending={registerMutation.isPending} />

          </form>

          <RegisterDivider />

          <RegisterFooter
            remember={remember}
            setRemember={setRemember}
            onGoogleClick={loginWithGoogle}
          />

        </div>
      </div>
    );
  }