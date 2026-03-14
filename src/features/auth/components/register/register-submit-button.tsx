interface Props {
  isPending: boolean
}

export default function RegisterSubmitButton({ isPending }: Props) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="w-full h-[53px] rounded-[8px] bg-[#4D96FF] text-white text-[12px] font-bold"
    >
      {isPending ? "Loading..." : "Buat Akun"}
    </button>
  )
}