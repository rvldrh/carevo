"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useFileUrl } from "@/features/auth/hooks/use-fil-utl";
import { useUploadFile } from "@/features/profile/hooks/use-upload-file";
import { useUpdateProfile } from "@/features/auth/hooks/use-update-profile";

interface Props {
  avatarFileId?: string;
  userId: string;
}

export default function AvatarUpload({ avatarFileId, userId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: fileUrl } = useFileUrl(avatarFileId);

  const [preview, setPreview] = useState<string | null>(null);

  const uploadFileMutation = useUploadFile();
  const updateProfileMutation = useUpdateProfile();

  const handleChange = async (file?: File) => {
    if (!file) return;

    try {
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl);

      const res = await uploadFileMutation.mutateAsync({ file });

      await updateProfileMutation.mutateAsync({
        userId,
        body: {
          avatarFileId: res.fileId,
        },
      });

    } catch (error) {
      console.error("Upload avatar failed", error);
    }
  };

  const imageSrc = preview || fileUrl || "/images/default-avatar.png";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-40 h-40">
        <Image
          src={imageSrc}
          alt="avatar"
          fill
          className="rounded-full object-cover"
          unoptimized
        />

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute bottom-2 right-2 bg-blue-100 p-2 rounded-full"
        >
          ✏️
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleChange(e.target.files?.[0])}
        />
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="text-sm font-semibold"
      >
        Ganti Foto
      </button>
    </div>
  );
}