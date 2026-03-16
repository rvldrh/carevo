import Image from "next/image";

export default function AfterLogoutIllustration() {
  return (
    <>
      <Image
        src="/illustration/kanan.svg"
        alt="decoration"
        width={237}
        height={301}
        className="absolute right-16 top-16"
      />

      <Image
        src="/illustration/pen.svg"
        alt="decoration"
        width={165}
        height={202}
        className="absolute right-0 bottom-0"
      />

      <Image
        src="/illustration/kiri.svg"
        alt="decoration"
        width={434}
        height={365}
        className="absolute left-0 bottom-0"
      />
    </>
  );
}