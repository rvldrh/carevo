"use client";

import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { FormModal } from "@/components/ui/modal/form-modal";
import { EXPERIENCE_FIELDS } from "@/features/cv-builder/forms/configs/experience-form";
import type { CVFormValues } from "@/features/cv-builder/schemas/cv.schema";

interface Props {
  isSaving?: boolean;
  onSave: (payload: CVFormValues) => void;
}

export function ExperienceSection({ isSaving, onSave }: Props) {
  const { control, handleSubmit, getValues } = useFormContext<CVFormValues>();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "workExperiences",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleOpenAdd = () => {
    setEditingIndex(null);
    setIsOpen(true);
  };

  const handleOpenEdit = (index: number) => {
    setEditingIndex(index);
    setIsOpen(true);
  };

  const handleFormSubmit = (data: Record<string, string | number | boolean | undefined>) => {
    const payload = {
      ...data,
      startYear: data.startYear ? Number(data.startYear) : undefined,
      endYear: data.endYear ? Number(data.endYear) : undefined,
      city: (data.city as string) || "",
      description: (data.description as string) || "",
      employmentStatus: (data.employmentStatus as string) || "",
    };

    if (editingIndex !== null) {
      update(editingIndex, payload as unknown as NonNullable<CVFormValues["workExperiences"]>[number]);
    } else {
      append(payload as unknown as NonNullable<CVFormValues["workExperiences"]>[number]);
    }
    setIsOpen(false);
    
    onSave(getValues());
  };

  const onSubmitSection = (data: CVFormValues) => {
    onSave(data);
  };

  return (
    <div className="flex flex-col items-center gap-6 pt-6">
      <div className="w-full flex flex-col gap-3 px-6">
        {fields.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">Belum ada pengalaman</p>
        ) : (
          fields.map((item, index) => (
            <ListItemCard
              key={item.id}
              title={item.position}
              subtitle={String(item.companyName)}
              onDelete={() => remove(index)}
              onEdit={() => handleOpenEdit(index)}
            />
          ))
        )}
      </div>

      <AccordionButton buttonText="Tambah Pengalaman" onClick={handleOpenAdd} />

      <div className="px-6 pb-6 w-full mt-4 border-t pt-4">
        <button
          type="button"
          onClick={handleSubmit(onSubmitSection)}
          disabled={isSaving}
          className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-all disabled:bg-blue-300"
        >
          {isSaving ? "Menyimpan..." : "Simpan Bagian Ini"}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormModal
            title={editingIndex !== null ? "Edit Pengalaman" : "Tambah Pengalaman"}
            fields={EXPERIENCE_FIELDS}
            aiSection="WORK_EXPERIENCE_DESCRIPTION"
            defaultValues={editingIndex !== null ? (fields[editingIndex] as unknown as Record<string, string | number | boolean | undefined>) : {}}
            onCancel={() => setIsOpen(false)}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
    </div>
  );
}
