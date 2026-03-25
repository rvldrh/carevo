import { useFormContext } from "react-hook-form";
import { CVFormValues } from "@/features/cv-builder/types/cv.types";

export function PersonalInfoFields() {
  const { register } = useFormContext<CVFormValues>();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <input {...register("personalInformation.firstName")} />
        <input {...register("personalInformation.lastName")} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input {...register("personalInformation.email")} />
        <input {...register("personalInformation.phone")} />
      </div>

      <input {...register("personalInformation.address")} />
      <input {...register("personalInformation.website")} />
    </div>
  );
}