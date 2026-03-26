"use client";

import { useState } from "react";
import { AccordionModal } from "@/components/ui/modal/component/AccordionModal";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (form: { major: string; degree: string }) => void;
};

export function EducationFormModal({ open, onClose, onSubmit }: Props) {
  
  const [formData, setFormData] = useState({
    degree: "",
    major: "",
    city: "",
    startDate: "",
    endDate: "",
    gpa: "",
    maxGpa: "",
    description: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("https://alloc001.adyuta.group/api/v1/cvs/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          prompt: `Buatkan deskripsi pendidikan untuk program studi ${formData.major} di ${formData.degree}` 
        }),
      });
      const data = await res.json();
      if (data.description) {
        setFormData(prev => ({ ...prev, description: data.description }));
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch("https://alloc001.adyuta.group/api/v1/cvs/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "education" }),
      });
      if (res.ok) {
        onSubmit?.({ major: formData.major, degree: formData.degree });
        alert("Data berhasil disimpan!");
        onClose();
      }
    } catch (error) {
      console.error("Save Error:", error);
    }
  };

  return (
    <AccordionModal open={open} onClose={onClose}>
      <div className="w-[614px] bg-white rounded-[20px] flex flex-col">
        <div className="h-12 px-3 bg-blue-400 rounded-t-[20px] flex items-center justify-between">
          <span className="text-white text-sm font-medium">Data Pendidikan</span>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <Input 
            label="Jenjang Pendidikan" 
            placeholder="Jenjang Pendidikan" 
            value={formData.degree}
            onChange={(v) => setFormData({...formData, degree: v})}
          />
          <Input 
            label="Program Studi" 
            placeholder="Teknik Informatika" 
            value={formData.major}
            onChange={(v) => setFormData({...formData, major: v})}
          />
          <Input 
            label="Kota" 
            placeholder="Malang" 
            value={formData.city}
            onChange={(v) => setFormData({...formData, city: v})}
          />

          <div className="flex gap-4">
            <Input label="Tanggal Mulai" placeholder="dd/mm/yy" value={formData.startDate} onChange={(v) => setFormData({...formData, startDate: v})} />
            <Input label="Tanggal Selesai" placeholder="dd/mm/yy" value={formData.endDate} onChange={(v) => setFormData({...formData, endDate: v})} />
          </div>

          <div className="flex gap-4">
            <Input label="Nilai/IPK" placeholder="3.8" value={formData.gpa} onChange={(v) => setFormData({...formData, gpa: v})} />
            <Input label="Sekala Maksimal" placeholder="4.0" value={formData.maxGpa} onChange={(v) => setFormData({...formData, maxGpa: v})} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Profil</span>
            <div className="border rounded-xl">
              <div className="h-15 p-2 bg-gray-100 rounded-t-xl">
                <button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="h-8 bg-gradient-to-br from-purple-600 to-slate-400 text-white text-xs px-3 py-1 rounded-lg disabled:opacity-50"
                >
                  {isGenerating ? "Sedang Berpikir..." : "Buat dengan AI"}
                </button>
              </div>
              <textarea
                className="w-full p-3 text-sm outline-none resize-none"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Deskripsi pendidikan..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 p-6">
          <button onClick={onClose} className="w-40 h-10 bg-gray-500 text-white rounded-xl text-sm">
            Batalkan
          </button>
          <button onClick={handleSave} className="w-48 h-10 bg-blue-400 text-white rounded-xl text-sm">
            Tambahkan
          </button>
        </div>
      </div>
    </AccordionModal>
  );
}

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({ label, placeholder, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-xs font-medium">{label}</span>
      <input
        className="h-9 px-3 rounded-xl border outline-none text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}