"use client";

import { useState } from "react";
import type { PersonalInformation } from "../schemas/cv.schema";

export function useCvLocal() {
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInformation | null>(null);

  return {
    personalInfo,
    setPersonalInfo,
  };
}