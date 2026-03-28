"use client";

import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { ListItemCard } from "@/components/ui/accordion/list-item-card";
import { AccordionButton } from "@/components/ui/button/accordion-button";
import { FormModal } from "@/components/ui/modal/form-modal";
import { ORGANIZATION_FIELDS } from "@/features/cv-builder/forms/configs/organization-form";
import type { CVFormValues } from "@/features/cv-builder/schemas/cv.schema";

interface Props {
  isSaving?: boolean;
  onSave: (payload: CVFormValues) => void;
}

export function OrganizationSection({ isSaving, onSave }: Props) {
  const { control, getValues } = useFormContext<CVFormValues>();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "organizations",
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
    } as unknown as NonNullable<CVFormValues["organizations"]>[number];

    if (editingIndex !== null) {
      update(editingIndex, payload);
    } else {
      append(payload);
    }
    
    setIsOpen(false);
    onSave(getValues());
  };



  return (
    <div className="flex flex-col items-center gap-6 pt-6">
      <div className="w-full flex flex-col gap-3 px-6">
        {fields.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">Belum ada organisasi</p>
        ) : (
          fields.map((item, index) => (
            <ListItemCard
              key={item.id}
              title={item.organizationName}
              subtitle={item.position}
              onDelete={() => remove(index)}
              onEdit={() => handleOpenEdit(index)}
            />
          ))
        )}
      </div>

      <AccordionButton 
        buttonText={isSaving ? "Menyimpan..." : "Tambah Organisasi"} 
        onClick={handleOpenAdd} 
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <FormModal
            title={editingIndex !== null ? "Edit Organisasi" : "Tambah Organisasi"}
            fields={ORGANIZATION_FIELDS}
            aiSection="ORGANIZATION_DESCRIPTION"
            defaultValues={editingIndex !== null ? (fields[editingIndex] as unknown as Record<string, string | number | boolean | undefined>) : {}}
            onCancel={() => setIsOpen(false)}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
    </div>
  );
}
