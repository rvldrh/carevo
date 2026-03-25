"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type {
  UpdateProfileInput} from "@/features/auth/schemas/auth.schema";
import {
  updateProfileSchema
} from "@/features/auth/schemas/auth.schema";

interface Props {
  profile: {
    username: string;
    email: string;
  };
}

export default function ProfileForm({ profile }: Props) {
  const form = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: profile.username,
      email: profile.email,
    },
  });

  const onSubmit = (data: UpdateProfileInput) => {
    console.warn("update profile", data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <div>
        <label className="text-xs font-medium">Username</label>
        <input
          {...form.register("username")}
          className="w-full h-11 px-4 rounded-xl border"
        />
      </div>

      <div>
        <label className="text-xs font-medium">Email</label>
        <input
          {...form.register("email")}
          className="w-full h-11 px-4 rounded-xl border"
        />
      </div>

      <button className="h-11 bg-blue-500 text-white rounded-xl font-semibold">
        Simpan Perubahan
      </button>

      <button
        type="button"
        className="h-11 bg-blue-400 text-white rounded-xl font-semibold"
      >
        Ganti Kata Sandi
      </button>
    </form>
  );
}