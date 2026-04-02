"use client";

import { useState } from "react";
import CreatePostModal from "./create-post-modal";
import Image from "next/image";
import Avatar from "@/components/ui/avatar";

export default function CreatePostBox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-4">
        <Avatar src="/icons/photo-profile.svg" alt="user" size={48} />
        <div className="flex-1 border rounded-xl h-10 flex items-center px-4 text-sm text-gray-500">
          Tulis Sesuatu di sini
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-xl"
        >
          <Image
            src={"/icons/plus.svg"}
            alt=""
            width={10}
            height={10}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xl"
          />
        </button>
      </div>

      <CreatePostModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
