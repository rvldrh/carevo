import { useRef } from "react";

interface FileUploadFieldProps {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
}

export const FileUploadField = ({
  label,
  file,
  onChange,
}: FileUploadFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-semibold">{label}</label>

      <div
        className="border border-dashed border-black rounded-lg h-[200px] flex items-center justify-center cursor-pointer"
        onClick={() => ref.current?.click()}
      >
        {file ? file.name : "Pilih / Drag File"}
      </div>

      <input
        ref={ref}
        type="file"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
};