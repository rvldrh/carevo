"use client";

import Modal from "@/components/ui/modal/container/modal-container";

interface AISaveModalProps {
  open: boolean;
  onClose: () => void;
  onSeeRecommendations: () => void;
  onLater: () => void;
}

export function AISaveModal({ open, onClose, onSeeRecommendations, onLater }: AISaveModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="AI telah menganalisis CV-mu! ✨"
    >
      <div className="p-8 flex flex-col items-center gap-8 max-w-[600px] text-center">
        <p className="text-lg font-medium text-gray-800 leading-relaxed">
          Berdasarkan CV-mu, kami menemukan beberapa skill yang bisa kamu tingkatkan. 
          Yuk intip rekomendasi sertifikat dan bootcamp yang cocok buatmu!
        </p>

        <div className="flex gap-4 w-full justify-center mt-4">
          <button
            onClick={onSeeRecommendations}
            className="flex-1 max-w-[220px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md active:scale-95"
          >
            Lihat Rekomendasi
          </button>
          
          <button
            onClick={onLater}
            className="flex-1 max-w-[220px] bg-gray-500 hover:bg-gray-600 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md active:scale-95"
          >
            Nanti saja
          </button>
        </div>
      </div>
    </Modal>
  );
}
