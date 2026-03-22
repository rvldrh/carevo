"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function AccordionModal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div
        className={clsx(
          "relative bg-white rounded-[20px] shadow-lg"
        )}
      >
        {children}
      </div>
    </div>
  );
}