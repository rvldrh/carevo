"use client";

import { useState } from "react";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { EducationFormModal } from "@/features/cv-builder/components/sections/education/education-form-modal";

type Education = {
  id: string;
  university: string;
  degree?: string;
};

const MOCK_EDUCATIONS: Education[] = [
  {
    id: "1",
    university: "Universitas Brawijaya",
    degree: "Teknik Informatika",
  },
  {
    id: "2",
    university: "SMAN 1 Malang",
    degree: "IPA",
  },
];

export function EducationSection() {
  const [data, setData] = useState<Education[]>(MOCK_EDUCATIONS);
  const [open, setIsOpen] = useState(false);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-3">
        {data.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">
            Belum ada data pendidikan
          </p>
        ) : (
          data.map((item) => (
            <ListItemCard
              key={item.id}
              title={item.university}
              subtitle={item.degree}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => console.log("edit", item.id)}
            />
          ))
        )}
      </div>

      <AccordionButton buttonText="Tambah Pendidikan" onClick={() => setIsOpen(true)} />
      <EducationFormModal open={open} onClose={() => setIsOpen(false)} />
    </div>
  );
}
