import Image from "next/image";

export default function WelcomeBanner() {
  return (
    <div className="w-full bg-gray-50 rounded-[20px] px-6 py-3 flex items-center gap-6">

      <Image
        src="https://placehold.co/52x52"
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />

      <h2 className="text-lg font-semibold text-stone-900">
        Selamat Datang di Komunitas
      </h2>

    </div>
  );
}