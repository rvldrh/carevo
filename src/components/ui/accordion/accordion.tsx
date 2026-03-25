"use client";

import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border shadow-sm bg-white">
      <button
      type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4"
      >
        <span className="font-medium">{title}</span>
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && <div className="p-4 border-t">{children}</div>}
    </div>
  );
}