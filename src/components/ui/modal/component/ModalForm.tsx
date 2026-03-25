import { useState } from "react";
import type { FieldConfig, FormState, FormValue } from "@/shared/types/ModalForm";

import { TextField } from "@/components/ui/modal/fields/TextFields";
import { MultiInputField } from "@/components/ui/modal/fields/MultiInputFields";
import { FileUploadField } from "@/components/ui/modal/fields/FileUploadFields";
import { RoleField } from "@/components/ui/modal/fields/RoleFields";

interface ModalFormProps {
  title: string;
  fields: FieldConfig[];
  onSubmit: (data: FormState) => void;
  onCancel: () => void;
}

export const ModalForm = ({
  title: _title,
  fields,
  onSubmit: _onSubmit,
  onCancel: _onCancel,
}: ModalFormProps) => {
  const initialState: FormState = fields.reduce((acc, field) => {
    if (field.type === "multi-input") {
      acc[field.name] = field.defaultValue ?? [];
    } else if (field.type === "file") {
      acc[field.name] = null;
    } else {
      acc[field.name] = field.defaultValue ?? "";
    }
    return acc;
  }, {} as FormState);

  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (name: string, value: FormValue) => {
    setFormData((prev: FormState) => ({
      ...prev,
      [name]: value,
    }));
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
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {fields.map(renderField)}

     
    </div>
  );
};
