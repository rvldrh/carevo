import { CVBuilderPage } from "@/features/cv-builder/page/cv-builder-page";
export default async function Page() {
  // const accessToken = await getAccessToken();
  
  // const user = accessToken ? await getUser({ headers: { authorization: `Bearer ${accessToken}` } }) : null;

  // console.log(accessToken)
  // console.log(user)


  // if (!user) {
  //   return <div className="p-10 text-center">Sesi tidak valid, silakan login ulang.</div>;
  // }

  
  return (
    <div className="w-full h-full">
      <CVBuilderPage />
    </div>
  );
}