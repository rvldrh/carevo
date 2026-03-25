import { useFormContext } from "react-hook-form";
import type { CVFormValues } from "@/features/cv-builder/types/cv.types";

export function PersonalInfoFields() {
  const { register } = useFormContext<CVFormValues>();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <input suppressHydrationWarning {...register("personalInformation.firstName")} />
        <input suppressHydrationWarning {...register("personalInformation.lastName")} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input suppressHydrationWarning {...register("personalInformation.email")} />
        <input suppressHydrationWarning {...register("personalInformation.phone")} />
      </div>

      <input suppressHydrationWarning {...register("personalInformation.address")} />
      <input suppressHydrationWarning {...register("personalInformation.website")} />
    </div>
  );
}