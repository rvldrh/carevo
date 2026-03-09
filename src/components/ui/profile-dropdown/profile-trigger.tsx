import Image from "next/image";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function ProfileTrigger({ open, setOpen }: Props) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-3 bg-blue-500 px-6 py-3 rounded-full text-white font-semibold"
    >
      <Image
        src="/avatar.png"
        alt="profile"
        width={40}
        height={40}
        className="rounded-full"
      />

      <span>Profto</span>

      <span
        className={`transition-transform ${
          open ? "rotate-180" : ""
        }`}
      >
        ^
      </span>
    </button>
  );
}