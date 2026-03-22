import { CVForm } from "@/features/cv-builder/components/cv-form";
import { CVPreview } from "@/features/cv-builder/components/cv-perview";
import { MOCK_CV } from "@/features/cv-builder/constants/mock-cv";

export default function CVBuilderPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/2 bg-gray-100 overflow-y-auto">
        <CVForm />
      </aside>

      <main className="w-full lg:w-1/2 bg-gray-300 overflow-auto">
        <div className="min-h-full flex items-start justify-center p-6 lg:p-10">
          <CVPreview data={MOCK_CV} />
        </div>
      </main>
    </div>
  );
}
