type Props = {
  remember: boolean;
  setRemember: (value: boolean) => void;
};

export default function RememberCheckbox({
  remember,
  setRemember,
}: Props) {
  return (
    <label className="flex items-center gap-[9px] cursor-pointer">

      <input
        type="checkbox"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />

      <span className="text-[13px] text-black">
        Ingat Saya 30 hari?
      </span>

    </label>
  );
}