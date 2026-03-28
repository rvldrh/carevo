import EmailSentView from "@/features/auth/components/email-sent/email-sent-view";
import { getUser } from "@/services/auth/getUser";

export default async function EmailSentPage() {
  const user = await getUser();
  const email = user?.data?.email ?? "email kamu";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#C8DEFF] overflow-hidden relative">

      <div
        className="
        absolute top-0 left-0
        -translate-x-1/3 -translate-y-1/4
        w-[300px] h-[284px]
        md:w-[479px] md:h-[453px]
        rounded-full bg-[#C8CEFC]
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        translate-x-1/3 translate-y-1/4
        w-[300px] h-[284px]
        md:w-[479px] md:h-[453px]
        rounded-full bg-[#4E61F6]
      "
      />
      <div className="relative z-10 w-full px-4 flex items-center justify-center">
        <EmailSentView email={email} />
      </div>

    </div>
  );
}
