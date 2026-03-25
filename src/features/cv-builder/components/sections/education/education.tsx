"use client";

import { useState } from "react";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { EducationFormModal } from "./education-form-modal";
import { useCVStore } from "@/features/cv-builder/hooks/use-cv-store";

type Education = {
  id: string;
  university: string;
  degree?: string;
};

export function EducationSection() {
  const [data, setData] = useState<Education[]>([]);
  const [open, setIsOpen] = useState(false);

  const { addEducation } = useCVStore();

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

      <AccordionButton
        buttonText="Tambah Pendidikan"
        onClick={() => setIsOpen(true)}
      />

      <EducationFormModal
        open={open}
        onClose={() => setIsOpen(false)}
        onSubmit={(form) => {
          const newData = {
            id: crypto.randomUUID(),
            university: form.major,
            degree: form.level,
          };

          setData((prev) => [...prev, newData]);
          addEducation(newData);
        }}
      />
    </div>
  );
}
