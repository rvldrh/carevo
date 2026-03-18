interface Props {
  isPending: boolean;
}

export default function LoginSubmit({ isPending }: Props) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="w-full h-[53px] rounded-lg bg-[#4E61F6] text-white"
    >
      {isPending ? "Memproses..." : "Masuk"}
    </button>
  );
}