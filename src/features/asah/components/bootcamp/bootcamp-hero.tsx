import Image from "next/image";

export default function BootcampHero() {
  return (
    <section className="relative mb-[5%] p-5 w-full bg-gradient-to-r from-fuchsia-700 via-black to-blue-500">
      <button
        type="button"
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
      >
        <Image
          alt="logo"
          src={"/icons/back.svg"}
          width={10}
          height={10}
          className="w-10 h-10 rounded-full flex items-center justify-center"
        />
      </button>

      <div className="max-w-[1200px] mx-auto h-[320px] flex items-center justify-between px-8">
        <Image
          src="/illustration/bootcamp-hero.svg"
          alt="bootcamp"
          width={489}
          height={320}
          className="rounded-3xl"
        />

        <div className="flex flex-col gap-3 text-white">
          <h1 className="text-xl font-semibold">Bootcamp</h1>

          <p className="text-xl font-semibold">
            Tingkatkan kemampuanmu sesuai rolemu!
          </p>
        </div>
      </div>
    </section>
  );
}
