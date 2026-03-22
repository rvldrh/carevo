"use client";

import { FieldConfig } from "@/features/cv-builder/types/form.type";
import clsx from "clsx";

type Props = {
  title: string;
  fields: FieldConfig[];
  onSubmit?: () => void;
  onCancel?: () => void;
};

export function FormModal({ title, fields, onSubmit, onCancel }: Props) {
  return (
    <div className="bg-white rounded-[20px] w-[614px] shadow-md flex flex-col">
      
      <div className="bg-blue-400 text-white px-4 py-3 rounded-t-[20px] text-sm font-medium">
        {title}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {fields.map((field) => {
          switch (field.type) {
            case "text":
            case "date":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
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
                    className="p-3 rounded-xl border border-gray-400 text-sm"
                  />
                </div>
              );

            case "select":
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-xs font-medium">{field.label}</label>
                  <select className="h-10 px-3 rounded-xl border border-gray-400 text-sm">
                    <option>Pilih</option>
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
                  <input type="checkbox" />
                  {field.label}
                </label>
              );

            default:
              return null;
          }
        })}

        <button className="self-start bg-gradient-to-r from-purple-600 to-slate-400 text-white text-xs px-3 py-2 rounded-lg">
          Buat dengan AI
        </button>
      </div>

      <div className="flex justify-between p-5">
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-6 py-2 rounded-xl"
        >
          Batalkan
        </button>

        <button
          onClick={onSubmit}
          className="bg-blue-400 text-white px-6 py-2 rounded-xl"
        >
          Tambahkan
        </button>
      </div>
    </div>
  );
}