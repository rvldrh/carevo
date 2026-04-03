"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { CertificateGrid } from "@/features/profile/components/certificate/components/certificate-grid";
import { useCertificates } from "@/features/profile/hooks/use-certificate";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import type { Certificate } from "@/features/profile/types/certificate.type";
import { certificateFields } from "../constatnts/certificate-fields";
import { uploadFile } from "@carevo/contracts/api";
import { useUploadFile } from "../hooks/use-upload-file";
import { fetchCertificates } from "@/services/profto/profile.service";

type CertificateFormValues = {
  name: string;
  publisher: string;
  publishDate: string;
  imageFileId?: File;
};

export default function EditCertificatesPage() {
  const { certificates, add } = useCertificates();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const uploadFileMutation = useUploadFile();


  useEffect(() => {
    if (certificates.length === 0) {
      fetchCertificates();
    }
  }, [certificates.length, fetchCertificates]);

  const handleAdd = async (valuesRaw: Record<string, any>): Promise<void> => {
    const values = valuesRaw as CertificateFormValues;
    try {
      let fileId: string | undefined;

      const file = values.imageFileId as File | undefined;

      if (file) {
        const res = await uploadFileMutation.mutateAsync({
          file,
        });

        fileId = res.fileId;
      }

      const newCertificate: Certificate = {
        id: crypto.randomUUID(),
        name: values.name,
        publisher: values.publisher,
        publishDate: values.publishDate,
        imageFileId: fileId ?? "019ced6f-febe-7104-af83-c24749622d10",
      };

      await add(newCertificate);

      setOpenAdd(false);
    } catch (error: unknown) {
      console.error("Failed to add certificate:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-100 px-4 md:px-8 py-6">
      <div className="flex items-center gap-8 mb-8">
        <Link href="/profile">
          <Image
            src="/icons/icon-back.svg"
            alt="Back"
            width={40}
            height={40}
            priority
          />
        </Link>

        <h1 className="text-xl md:text-2xl font-semibold">Certificates</h1>

      </div>

      <CertificateGrid certificates={certificates} />

      <Modal
        title="Tambah Certificate"
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Tambah Certificate"
            fields={certificateFields}
            onCancel={() => setOpenAdd(false)}
            onSubmit={handleAdd}
            submitText="Tambah"
          />
        </div>
      </Modal>
    </main>
  );
}
