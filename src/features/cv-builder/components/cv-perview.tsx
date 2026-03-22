import { CV } from "../schemas/cv.schema";
import { CourseItem } from "./cv-preview-section/course-item";
import { EducationItem } from "./cv-preview-section/education-section";
import { ExperienceItem } from "./cv-preview-section/experience-item";
import { Header } from "./cv-preview-section/header-section";
import { OrganizationItem } from "./cv-preview-section/organization-item";
import { Section } from "./cv-preview-section/section";

type Props = {
  data: CV;
};

export function CVPreview({ data }: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[800px] bg-white p-6 md:p-10 shadow-sm">
        <Header fullName="Bagas" email="email" location="lokasi" phone="0897" summary="halo nama" title="Judul" key={1} />

        <Section title="Riwayat Pekerjaan">
          {data.experiences.map((item, i) => (
            <ExperienceItem key={i} {...item} />
          ))}
        </Section>

        <Section title="Pendidikan">
          {data.educations.map((item, i) => (
            <EducationItem key={i} {...item} />
          ))}
        </Section>

        <Section title="Kursus">
          {data.courses.map((item, i) => (
            <CourseItem key={i} {...item} />
          ))}
        </Section>

        <Section title="Organisasi">
          {data.organizations.map((item, i) => (
            <OrganizationItem key={i} {...item} />
          ))}
        </Section>
      </div>
    </div>
  );
}