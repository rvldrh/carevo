"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getFile } from "@carevo/contracts/api";
import type { Project } from "@/features/profile/types/project.type";
import { useProjects } from "@/features/profile/hooks/use-project";
import Modal from "@/components/ui/modal/container/modal-container";
import { ModalForm } from "@/components/ui/modal/component/ModalForm";
import { projectFields } from "@/features/profile/constatnts/project-fields";
import type { FormState } from "@/shared/types/ModalForm";
import IconButton from "@/components/ui/button/icon-button";
import { formatDate } from "@/features/profile/utils/formatter-helper";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const { edit } = useProjects();

  useEffect(() => {
    if (!project.imageFileId) return;

    let objectUrl: string;

    getFile(project.imageFileId)
      .then((blob: Blob) => {
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      })
      .catch((err: unknown) => {
        console.error("Failed to load image:", err);
      });

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [project.imageFileId]);

  const handleEdit = async (values: FormState) => {
    const updatedProject: Project = {
      id: project.id,
      name: values.name as string,
      professionRole: values.professionRole as string,
      imageFileId:
        (values.imageFileId as string) || project.imageFileId,
      date: formatDate(values.date as string),
      description: values.description as string,
    };

    try {
      await edit(updatedProject);
      setOpenEdit(false);
    } catch (error: unknown) {
      console.error("Failed to edit project:", error);
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imgSrc ?? "/placeholder-project.png"}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-sm md:text-base">
            {project.name}
          </h3>
          <p className="text-gray-500 text-sm">{project.date}</p>
        </div>

        <IconButton
          icon="/icons/edit.svg"
          alt="edit"
          onClick={() => setOpenEdit(true)}
        />
      </div>

      <Modal
        title="Edit projek"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi
          </h3>

          <ModalForm
            title="Edit projek"
            fields={projectFields}
            onCancel={() => setOpenEdit(false)}
            onSubmit={handleEdit}
            defaultValues={{
              name: project.name,
              professionRole: project.professionRole,
              date: project.date,
              description: project.description,
            }}
            submitText="Edit"
          />
        </div>
      </Modal>
    </div>
  );
}