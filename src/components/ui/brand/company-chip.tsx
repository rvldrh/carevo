import Image from "next/image"
import { Company } from "@/features/asah/types/company"

interface Props {
  company: Company
}

export default function CompanyChip({ company }: Props) {
  return (
    <div className="h-12 px-4 bg-white rounded-3xl flex items-center gap-2">
      <Image
        src={company.logo}
        width={8}
        height={8}
        alt="logo"
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold">{company.name}</span>
    </div>
  )
}