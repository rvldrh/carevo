"use client";

import { useState } from "react";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { FormModal } from "@/components/ui/modal/form-modal";
import { EXPERIENCE_FIELDS } from "@/features/cv-builder/forms/configs/experience-form";

type Organization = {
  id: string;
  name: string;
  role: string;
};

const MOCK: Organization[] = [
  {
    id: "1",
    name: "Hima Informatika",
    role: "Staff Kreatif",
  },
];

export function OrganizationSection() {
  const [data, setData] = useState<Organization[]>(MOCK);
  const [open, setOpen] = useState(false)

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {

  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-3">
        {data.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">
            Belum ada organisasi
          </p>
        ) : (
          data.map((item) => (
            <ListItemCard
              key={item.id}
              title={item.name}
              subtitle={item.role}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => console.log("edit", item.id)}
            />
          ))
        )}
      </div>

      <AccordionButton buttonText="Tambah Organisasi" onClick={() => setOpen(true)} />

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormModal
            title="Data Organisasi"
            fields={EXPERIENCE_FIELDS}
            onCancel={() => setOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
