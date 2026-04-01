"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getFile } from "@carevo/contracts/api";
import IconButton from "@/components/ui/button/icon-button";
import type { Certificate } from "@/features/profile/types/certificate.type";
import { useCertificates } from "@/features/profile/hooks/use-certificate";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { certificateFields } from "@/features/profile/constatnts/certificate-fields";

type Props = {
  certificate: Certificate;
};

type CertificateFormValues = {
  name: string;
  publisher: string;
  publishDate: string;
};

export function CertificateCard({ certificate }: Props) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const { edit } = useCertificates();

  useEffect(() => {
    if (!certificate.imageFileId) return;

    let objectUrl: string | null = null;

    getFile(certificate.imageFileId)
      .then((blob: Blob) => {
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      })
      .catch((err: unknown) => {
        console.error("Failed to load certificate image:", err);
      });

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [certificate.imageFileId]);

  const handleEdit = async (values: CertificateFormValues): Promise<void> => {
    const updated: Certificate = {
      ...certificate,
      name: values.name,
      publisher: values.publisher,
      publishDate: values.publishDate,
    };

    await edit(updated);
    setOpenEdit(false);
  };

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={certificate.name}
            fill
            className="object-contain p-2"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-400">
            Loading...
          </div>
        )}
      </div>

      <div className="p-4 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base">
            {certificate.name}
          </h3>

          <p className="text-gray-500 text-sm">{certificate.publisher}</p>

          <p className="text-gray-400 text-xs mt-1">
            {certificate.publishDate}
          </p>
        </div>

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => setOpenEdit(true)}
        />
      </div>

      <Modal
        title="Edit Certificate"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi
          </h3>

          <ModalForm
            title="Edit Certificate"
            fields={certificateFields}
            onCancel={() => setOpenEdit(false)}
            onSubmit={handleEdit}
            defaultValues={{
              name: certificate.name,
              publisher: certificate.publisher,
              publishDate: certificate.publishDate,
            }}
            submitText="Edit"
          />
        </div>
      </Modal>
    </div>
  );
}