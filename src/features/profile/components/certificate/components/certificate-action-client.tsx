"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { certificateFields } from "@/features/profile/constatnts/certificate-fields";
import { useUpdateProfto } from "@/features/profile/hooks/use-profto";
import type {
  ProftoResponse,
  UpdateProftoBody,
  Certificate,
} from "@/features/profile/types/profto";
import type { FormState } from "@/shared/types/ModalForm";
import { useUploadFile } from "@/features/profile/hooks/use-upload-file";
import { formatDate } from "@/features/profile/utils/formatter-helper";
import { useRouter } from "next/navigation";

export default function CertificateActionsClient({
  profto,
  userId,
}: {
  profto: ProftoResponse | null;
  userId: string;
}) {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const updateProfto = useUpdateProfto();
  const uploadFileMutation = useUploadFile();
  const router = useRouter();

  const handleAdd = async (values: FormState) => {
    try {
      let fileId: string | undefined;

      const file = values.image as File | undefined;

      if (file) {
        const res = await uploadFileMutation.mutateAsync({
          file,
        });

        fileId = res.fileId;
      }

      const newCertificate: Certificate = {
        imageFileId: fileId || "019cda81-ff67-713c-84f6-53ad00c46069",
        name: values.name as string,
        publishDate: formatDate(values.publishDate as string),
        publisher: values.publisher as string,
      };

      const body: UpdateProftoBody = {
        certificates: [...(profto?.certificates || []), newCertificate],
      };

      await updateProfto.mutateAsync({ userId, body });

      setOpenModalAdd(false);
    } catch (error) {
      console.error("Failed to add certificate", error);
    }
  };

  const handleEdit = async (values: FormState) => {
    try {
      let fileId: string | undefined;

      const file = values.image as File | undefined;

      // ✅ upload kalau user ganti file
      if (file) {
        const res = await uploadFileMutation.mutateAsync({
          file,
        });

        fileId = res.fileId;
      }

      const updatedCertificate: Certificate = {
        imageFileId: fileId || profto?.certificates?.[0]?.imageFileId || "",
        name: values.name as string,
        publishDate: values.publishDate as string,
        publisher: values.publisher as string,
      };

      const body: UpdateProftoBody = {
        certificates: [updatedCertificate],
      };

      await updateProfto.mutateAsync({ userId, body });

      setOpenModalEdit(false);
    } catch (error) {
      console.error("Failed to edit certificate", error);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <IconButton
          icon="/icons/plus.svg"
          alt="add"
          onClick={() => setOpenModalAdd(true)}
        />

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => router.push("/profile/edit-certificate")}
        />
      </div>

      {openModalAdd && (
        <Modal
          title="Tambah Sertifikat"
          open={openModalAdd}
          onClose={() => setOpenModalAdd(false)}
        >
          <ModalForm
            title="Tambah Sertifikat"
            fields={certificateFields}
            onCancel={() => setOpenModalAdd(false)}
            onSubmit={handleAdd}
            submitText="Simpan"
          />
        </Modal>
      )}

      {openModalEdit && (
        <Modal
          title="Edit Sertifikat"
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
        >
          <ModalForm
            title="Edit Sertifikat"
            fields={certificateFields}
            onCancel={() => setOpenModalEdit(false)}
            onSubmit={handleEdit}
            defaultValues={{
              name: profto?.certificates?.[0]?.name || "",
              publisher: profto?.certificates?.[0]?.publisher || "",
              publishDate: profto?.certificates?.[0]?.publishDate || "",
            }}
            submitText="Simpan"
          />
        </Modal>
      )}
    </>
  );
}
