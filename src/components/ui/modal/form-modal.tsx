"use client";

import { useState } from "react";
import type { FieldConfig } from "@/features/cv-builder/types/form.type";
import { cvService } from "@/services/cv/cv.service";

export type AISection = 
  | "PROFILE" 
  | "WORK_EXPERIENCE_DESCRIPTION" 
  | "ORGANIZATION_DESCRIPTION" 
  | "COURSE_DESCRIPTION" 
  | "EDUCATION_DESCRIPTION";

type Props = {
  title: string;
  fields: FieldConfig[];
  defaultValues?: Record<string, any>;
  onSubmit?: (values: Record<string, any>) => void;
  onCancel?: () => void;
  aiSection?: AISection;
};

export function FormModal({ title, fields, defaultValues, onSubmit, onCancel, aiSection }: Props) {
  const [values, setValues] = useState<Record<string, any>>(defaultValues || {});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateAI = async () => {
    if (!aiSection) return;
    setIsGenerating(true);
    
    const contextLines = fields.map(f => {
      if (f.name === "description" || f.type === "checkbox") return "";
      return values[f.name] ? `${f.label}: ${values[f.name]}` : "";
    }).filter(Boolean);
    const context = contextLines.join(", ");

    try {
      const result = await cvService.aiGenerateCV({
        input: context || "Tolong buatkan deskripsi profesional",
        section: aiSection
      });
      
      const newValues = { ...values, description: result };
      setValues(newValues);
      onSubmit?.(newValues); // Auto submit and patch after generate
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-[20px] w-[614px] shadow-md flex flex-col max-h-[90vh] overflow-y-auto">
      <div className="bg-blue-400 text-white px-4 py-3 rounded-t-[20px] text-sm font-medium">
        {title}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {fields.map((field) => {
          switch (field.type) {
            case "text":
            case "date":
            case "number":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="h-10 px-3 rounded-xl border border-gray-400 text-sm"
                  />
                </div>
              );

            case "textarea":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium">{field.label}</label>
                  <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="p-3 rounded-xl border border-gray-400 text-sm"
                  />
                </div>
              );

            case "select":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium">{field.label}</label>
                  <select
                    value={values[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="h-10 px-3 rounded-xl border border-gray-400 text-sm"
                  >
                    <option value="">Pilih</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              );

            case "checkbox":
              return (
                <label key={field.name} className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={!!values[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.checked)}
                  />
                  {field.label}
                </label>
              );

            default:
              return null;
          }
        })}

        {aiSection && (
          <button 
            type="button" 
            onClick={handleGenerateAI}
            disabled={isGenerating}
            className="self-start bg-gradient-to-r from-[#8E64D8] to-[#6495D8] text-white text-xs px-3 py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {isGenerating ? "Menyusun..." : "Buat dengan AI"}
          </button>
        )}
      </div>

      <div className="flex gap-4 p-5 mt-auto">
        <button
          onClick={onCancel}
          className="flex-1 bg-[#9CA3AF] hover:bg-gray-500 text-white py-3 rounded-xl text-sm font-medium transition-colors"
        >
          Batalkan
        </button>

        <button
          onClick={() => onSubmit?.(values)}
          className="flex-1 bg-[#18A0FB] hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-medium transition-colors"
        >
          Tambahkan
        </button>
      </div>
    </div>
  );
}