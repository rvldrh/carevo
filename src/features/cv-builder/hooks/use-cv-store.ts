"use client";

import { create } from "zustand";
import { CVPayload } from "@/features/cv-builder/schemas/cv.schema";

type CVState = {
  data: CVPayload;

  setPersonal: (val: CVPayload["personal"]) => void;
  addEducation: (val: CVPayload["educations"][0]) => void;
  addExperience: (val: CVPayload["experiences"][0]) => void;
  addCourse: (val: CVPayload["courses"][0]) => void;
  addOrganization: (val: CVPayload["organizations"][0]) => void;
};

export const useCVStore = create<CVState>((set) => ({
  data: {
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      summary: "",
    },
    educations: [],
    experiences: [],
    courses: [],
    organizations: [],
  },

  setPersonal: (val) =>
    set((state) => ({
      data: { ...state.data, personal: val },
    })),

  addEducation: (val) =>
    set((state) => ({
      data: { ...state.data, educations: [...state.data.educations, val] },
    })),

  addExperience: (val) =>
    set((state) => ({
      data: { ...state.data, experiences: [...state.data.experiences, val] },
    })),

  addCourse: (val) =>
    set((state) => ({
      data: { ...state.data, courses: [...state.data.courses, val] },
    })),

  addOrganization: (val) =>
    set((state) => ({
      data: {
        ...state.data,
        organizations: [...state.data.organizations, val],
      },
    })),
}));