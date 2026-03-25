"use client";

import { useState } from "react";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { FormModal } from "@/components/ui/modal/form-modal";
import { EXPERIENCE_FIELDS } from "@/features/cv-builder/forms/configs/experience-form";
import { useCVStore } from "../../hooks/use-cv-store";
type Experience = {
    id: string;
    company: string;
    role: string;
};

const MOCK_EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "Tokopedia",
        role: "UI/UX Designer",
    },
];

export function ExperienceSection() {
    const { addExperience } = useCVStore();
  const [data, setData] = useState<Experience[]>(MOCK_EXPERIENCES);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    const newData = {
      id: crypto.randomUUID(),
      company: "Tokopedia",
      role: "UI/UX Designer",
    };

    setData((prev) => [...prev, newData]);
    addExperience(newData);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <div className="w-full flex flex-col gap-3">
          {data.length === 0 ? (
            <p className="text-sm text-gray-500 text-center">
              Belum ada pengalaman
            </p>
          ) : (
            data.map((item) => (
              <ListItemCard
                key={item.id}
                title={item.role}
                subtitle={item.company}
                onDelete={() => handleDelete(item.id)}
                onEdit={() => setIsOpen(true)}
              />
            ))
          )}
        </div>

        <AccordionButton
          buttonText="Tambah Pengalaman"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormModal
            title="Data Pengalaman"
            fields={EXPERIENCE_FIELDS}
            onCancel={() => setIsOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
}
