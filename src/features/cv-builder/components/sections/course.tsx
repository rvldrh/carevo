"use client";

import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { FormModal } from "@/components/ui/modal/form-modal";
import { COURSE_FIELDS } from "@/features/cv-builder/forms/configs/course-form";
import type { CVFormValues } from "@/features/cv-builder/schemas/cv.schema";

interface Props {
  isSaving?: boolean;
  onSave: (payload: CVFormValues) => void;
}

export function CourseSection({ isSaving, onSave }: Props) {
  const { control, getValues } = useFormContext<CVFormValues>();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "courses",
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
      location: (data.location as string) || "",
      description: (data.description as string) || "",
      url: (data.url as string) || "",
    };

    if (editingIndex !== null) {
      update(editingIndex, payload as unknown as NonNullable<CVFormValues["courses"]>[number]);
    } else {
      append(payload as unknown as NonNullable<CVFormValues["courses"]>[number]);
    }
    setIsOpen(false);

    onSave(getValues());
  };



  return (
    <div className="flex flex-col items-center gap-6 pt-6">
      <div className="w-full flex flex-col gap-3 px-6">
        {fields.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">Belum ada kursus</p>
        ) : (
          fields.map((item, index) => (
            <ListItemCard
              key={item.id}
              title={item.name}
              subtitle={item.organizer}
              onDelete={() => remove(index)}
              onEdit={() => handleOpenEdit(index)}
            />
          ))
        )}
      </div>

      <AccordionButton 
        buttonText={isSaving ? "Menyimpan..." : "Tambah Kursus"} 
        onClick={handleOpenAdd} 
      />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormModal
            title={editingIndex !== null ? "Edit Kursus" : "Tambah Kursus"}
            fields={COURSE_FIELDS}
            aiSection="COURSE_DESCRIPTION"
            defaultValues={editingIndex !== null ? (fields[editingIndex] as unknown as Record<string, string | number | boolean | undefined>) : {}}
            onCancel={() => setIsOpen(false)}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
    </div>
  );
}
