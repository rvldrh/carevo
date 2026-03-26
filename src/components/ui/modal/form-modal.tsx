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
  defaultValues?: Record<string, string | number | boolean | undefined>;
  onSubmit?: (values: Record<string, string | number | boolean | undefined>) => void;
  onCancel?: () => void;
  aiSection?: AISection;
};

export function FormModal({ title, fields, defaultValues, onSubmit, onCancel, aiSection }: Props) {
  const [values, setValues] = useState<Record<string, string | number | boolean | undefined>>(defaultValues || {});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (name: string, value: string | number | boolean | undefined) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateAI = async () => {
    if (!aiSection) return;
    setIsGenerating(true);
    setValues((prev) => ({ ...prev, description: "" })); 
    
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
      
      
      let currentText = "";
      const resultString = result || "";
      const interval = 10; 
      
      const typingTimer = setInterval(() => {
        if (currentText.length < resultString.length) {
          currentText += resultString[currentText.length];
          
          setValues((prev) => ({ ...prev, description: currentText }));
        } else {
          clearInterval(typingTimer);
        }
      }, interval);

    } catch (e) {
      console.error(e);
      setValues((prev) => ({ ...prev, description: "Gagal membuat deskripsi. Coba lagi." }));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-[20px] w-[614px] shadow-md flex flex-col max-h-[90vh] overflow-y-auto scale-in-center">
      <div className="bg-blue-400 text-white px-4 py-3 rounded-t-[20px] text-sm font-medium flex justify-between items-center">
        <span>{title}</span>
        {isGenerating && (
          <span className="text-[10px] animate-pulse flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            AI sedang berpikir...
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {fields.map((field) => {
          switch (field.type) {
            case "text":
            case "date":
            case "number":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(values[field.name] as string | number | undefined) || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="h-10 px-3 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
              );

            case "textarea":
              return (
                <div key={field.name} className="flex flex-col gap-1 relative">
                  <label className="text-xs font-medium text-gray-700">{field.label}</label>
                  <div className="relative">
                    <textarea
                      rows={5}
                      placeholder={field.placeholder}
                      value={isGenerating ? "Menyusun deskripsi profesional anda...\n\n(AI sedang memproses input berdasarkan data di atas)" : (values[field.name] as string | undefined) || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className={`w-full p-4 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none text-sm transition-all resize-none ${isGenerating ? 'italic text-gray-400' : ''}`}
                    />
                    {isGenerating && (
                      <div className="absolute bottom-4 right-4 h-5 w-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </div>
                </div>
              );

            case "select":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">{field.label}</label>
                  <select
                    value={(values[field.name] as string | number | undefined) || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="h-10 px-3 rounded-xl border border-gray-300 outline-none text-sm"
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
                <label key={field.name} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-500 rounded border-gray-300"
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
          <div className="mt-2 flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <span className="text-[10px] text-blue-600 font-medium max-w-[70%]">
              Gunakan AI untuk membuat deskripsi profesional berdasarkan data di atas secara otomatis.
            </span>
            <button 
              type="button" 
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="flex items-center gap-2 bg-gradient-to-r from-[#8E64D8] to-[#6495D8] text-white text-[11px] font-bold px-4 py-2 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
            >
              <svg className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isGenerating ? "Berpikir..." : "Buat AI"}
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-4 p-5 mt-auto bg-gray-50 border-t rounded-b-[20px]">
        <button
          onClick={onCancel}
          className="flex-1 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
        >
          Batalkan
        </button>

        <button
          onClick={() => onSubmit?.(values)}
          disabled={isGenerating}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md active:scale-[0.98] disabled:bg-gray-400"
        >
          Tambahkan
        </button>
      </div>
    </div>
  );
}