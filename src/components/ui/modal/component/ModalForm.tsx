"use client";

import { useEffect, useState } from "react";
import type { FieldConfig, FormState, FormValue } from "@/shared/types/ModalForm";

import { TextField } from "@/components/ui/modal/fields/TextFields";
import { MultiInputField } from "@/components/ui/modal/fields/MultiInputFields";
import { FileUploadField } from "@/components/ui/modal/fields/FileUploadFields";
import { RoleField } from "@/components/ui/modal/fields/RoleFields";
import { ModalButtons } from "@/components/ui/modal/component/ModalButtons";

interface ModalFormProps {
  title: string;
  fields: FieldConfig[];
  onSubmit: (data: FormState) => Promise<void> | void;
  onCancel: () => void;
  defaultValues?: Partial<FormState>;
  submitText?: string;
  cancelText?: string;
}

export const ModalForm = ({
  title: _title,
  fields,
  onSubmit,
  onCancel,
  defaultValues,
  submitText = "Terapkan",
  cancelText = "Batal",
}: ModalFormProps) => {
  const [formData, setFormData] = useState<FormState>({} as FormState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newState: FormState = fields.reduce((acc, field) => {
      const providedValue = defaultValues?.[field.name];

      if (field.type === "multi-input") {
        acc[field.name] = providedValue ?? field.defaultValue ?? [];
      } else if (field.type === "file") {
        acc[field.name] = (providedValue as File) ?? null;
      } else {
        acc[field.name] = providedValue ?? field.defaultValue ?? "";
      }

      return acc;
    }, {} as FormState);

    setFormData(newState);
  }, [defaultValues, fields]);

  const handleChange = (name: string, value: FormValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitInternal = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await onSubmit(formData);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: FieldConfig) => {
    const value = formData[field.name];

    switch (field.type) {
      case "text":
      case "date":
        return (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={value as string}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        );

      case "multi-input":
        return (
          <MultiInputField
            key={field.name}
            label={field.label}
            name={field.name}
            values={value as string[]}
            onChange={handleChange}
          />
        );

      case "file":
        return (
          <FileUploadField
            key={field.name}
            label={field.label}
            file={value as File | null}
            onChange={(file) => handleChange(field.name, file)}
          />
        );

      case "role":
        return (
          <RoleField
            key={field.name}
            label={field.label}
            name={field.name}
            value={value as string}
            options={field.options}
            onChange={handleChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg">
          <div className="h-8 w-8 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      )}

      <div className={isLoading ? "pointer-events-none opacity-60" : ""}>
        {fields.map(renderField)}

        <ModalButtons
          onCancel={onCancel}
          onSubmit={handleSubmitInternal}
          submitText={isLoading ? "Menyimpan..." : submitText}
          cancelText={cancelText}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};