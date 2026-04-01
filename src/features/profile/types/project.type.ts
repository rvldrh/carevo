export type Project = {
  id: string;
  name: string;
  professionRole: string;
  imageFileId: string;
  date: string;
  description: string;
};

export type UpdateProjectsBody = {
  projects: Project[];
};