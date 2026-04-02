import EmailSentView from "@/features/auth/components/email-sent/email-sent-view";
import { getUser } from "@carevo/contracts/api";


export default async function EmailSentPage() {
  let email = "email kamu";
  try {
    const user = await getUser();
    if (user?.email) email = user.email;
  } catch (error) {
    console.warn("Failed to get user during build or unauthenticated state", error);
  }

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
