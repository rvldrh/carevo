import { Dispatch, SetStateAction } from "react";

interface Props {
  oldPassword: string;
  newPassword: string;
  setOldPassword: Dispatch<SetStateAction<string>>;
  setNewPassword: Dispatch<SetStateAction<string>>;
}

export default function ChangePasswordFields({
  oldPassword,
  newPassword,
  setOldPassword,
  setNewPassword,
}: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">

      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-medium text-[#232323]">
          Kata Sandi Lama
        </label>

        <input
          type="password"
          placeholder="Masukkan kata sandi lama"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full h-[45px] rounded-[8px] border border-[#8A8A8A] px-4 text-[13px] outline-none focus:ring-2 focus:ring-[#4D96FF]/40"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-medium text-[#232323]">
          Kata Sandi Baru
        </label>

        <input
          type="password"
          placeholder="Masukkan kata sandi baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          autoComplete="new-password"
          className="w-full h-[45px] rounded-[8px] border border-[#8A8A8A] px-4 text-[13px] outline-none focus:ring-2 focus:ring-[#4D96FF]/40"
        />
      </div>

    </div>
  );
}