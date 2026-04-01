"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ProjectGrid } from "@/features/profile/components/project/components/project-grid";
import { useProjects } from "@/features/profile/hooks/use-project";

import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import IconButton from "@/components/ui/button/icon-button";

import { projectFields } from "../constatnts/project-fields";
import type { FormState } from "@/shared/types/ModalForm";
import type { Project } from "@/features/profile/types/project.type";
import { formatDate } from "../utils/formatter-helper";
import { useUploadFile } from "../hooks/use-upload-file";

export default function EditProjectsPage() {
  const { projects, add } = useProjects();
  const uploadFileMutation = useUploadFile();

  const [openAdd, setOpenAdd] = useState<boolean>(false);

  

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
        id: crypto.randomUUID(), 
        name: values.name as string,
        professionRole: values.professionRole as string,
        imageFileId:
          fileId ?? "019ced6f-febe-7104-af83-c24749622d10",
        date: formatDate(values.date as string),
        description: values.description as string,
      };

      await add(newProject);

      setOpenAdd(false);
    } catch (error: unknown) {
      console.error("Failed to add project:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-100 px-4 md:px-8 py-6">
      <div className="flex items-center mb-8">
        <div className="flex items-center gap-8">
          <Link href="/profile">
            <Image
              src="/icons/icon-back.svg"
              alt="Back"
              width={40}
              height={40}
              priority
            />
          </Link>

          <h1 className="text-xl md:text-2xl font-semibold">
            Projects
          </h1>

          <IconButton
            icon="/icons/plus.svg"
            alt="add"
            onClick={() => setOpenAdd(true)}
          />
        </div>
      </div>

      <ProjectGrid projects={projects} />

      <Modal
        title="Tambah projek"
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi
          </h3>

          <ModalForm
            title="Tambah Projek"
            fields={projectFields}
            onCancel={() => setOpenAdd(false)}
            onSubmit={handleAdd}
          />
        </div>
      </Modal>
    </main>
  );
}