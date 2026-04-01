"use client";

import { useState } from "react";
import IconButton from "@/components/ui/button/icon-button";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { projectFields } from "@/features/profile/constatnts/project-fields";
import { useUpdateProfto } from "@/features/profile/hooks/use-profto";
import type {
  ProftoResponse,
  UpdateProftoBody,
  Project,
} from "@/features/profile/types/profto";
import type { FormState } from "@/shared/types/ModalForm";
import { formatDate } from "@/features/profile/utils/formatter-helper";
import { useUploadFile } from "@/features/profile/hooks/use-upload-file";
import { useRouter } from "next/navigation";

export default function ProjectEditorClient({
  profto,
  userId,
}: {
  profto: ProftoResponse | null;
  userId: string;
}) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const updateProfto = useUpdateProfto();
  const uploadFileMutation = useUploadFile();
  const router = useRouter();

  const handleAdd = async (values: FormState) => {
    try {
      let fileId: string | undefined;

      const file = values.imageFileId as File | undefined;

      if (file) {
        const res = await uploadFileMutation.mutateAsync({
          file,
        });

        fileId = res.fileId;
      }

      const newProject: Project = {
        name: values.name as string,
        professionRole: values.professionRole as Project["professionRole"],
        imageFileId: fileId || "019ced6f-febe-7104-af83-c24749622d10",
        date: formatDate(values.date as string),
        description: values.description as string,
      };

      const body: UpdateProftoBody = {
        projects: [...(profto?.projects || []), newProject],
      };

      await updateProfto.mutateAsync({ userId, body });

      setOpenAdd(false);
    } catch (error) {
      console.error("Failed to add project", error);
    }
  };

  const handleEdit = async (values: FormState) => {
    const updatedProject: Project = {
      name: values.name as string,
      professionRole: values.professionRole as string,
      imageFileId:
        (values.imageFileId as string) ||
        profto?.projects?.[0]?.imageFileId ||
        "",
      date: formatDate(values.date as string),
      description: values.description as string,
    };

    const body: UpdateProftoBody = {
      projects: [updatedProject],
    };

    try {
      await updateProfto.mutateAsync({ userId, body });
      setOpenEdit(false);
    } catch (error) {
      console.error("Failed to edit project", error);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <IconButton
          icon="/icons/plus.svg"
          alt="add"
          onClick={() => setOpenAdd(true)}
        />

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => router.push("/profile/edit-project")}
        />
      </div>

      {}
      <Modal
        title="Tambah projek"
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Tambah Projek"
            fields={projectFields}
            onCancel={() => setOpenAdd(false)}
            onSubmit={handleAdd}
          />
        </div>
      </Modal>

      {}
      <Modal
        title="Edit projek"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>

          <ModalForm
            title="Edit projek"
            fields={projectFields}
            onCancel={() => setOpenEdit(false)}
            onSubmit={handleEdit}
            defaultValues={{
              name: profto?.projects?.[0]?.name || "",
              professionRole: profto?.projects?.[0]?.professionRole || "",
              date: formatDate(profto?.projects?.[0]?.date as string),
              description: profto?.projects?.[0]?.description || "",
            }}
            submitText="Edit"
          />
        </div>
      </Modal>
    </>
  );
}
