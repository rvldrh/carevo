import Image from "next/image";

export default function WelcomeCard() {
  return (
    <section className="mt-16 flex justify-center">
      <div className="w-[907px] h-32 bg-blue-400 rounded-[20px] flex items-center justify-center gap-5">
        <Image
          src={"/icons/profile.svg"}
          alt="profile"
          width={12}
          height={12}
          className="w-12 h-12 rounded-full"
        />

        <div className="text-white text-center">
          <p className="text-xl font-semibold">
            Selamat datang di asah Bagas 👋
          </p>
          <p className="text-xl font-semibold">
            Tingkatkan skill UI/UX Designer-mu
          </p>
        </div>
      </div>
    </section>
  );
}