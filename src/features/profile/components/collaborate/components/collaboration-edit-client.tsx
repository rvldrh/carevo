"use client";

import IconButton from "@/components/ui/button/icon-button";

export default function CollaborationEditClient() {
  return (
    <IconButton
      icon="/icons/edit.svg"
      alt="edit"
      className="absolute top-6 right-[22%]"
      onClick={() => console.warn("Open edit collaboration")}
    />
  );
}