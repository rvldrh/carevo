interface Props {
  isSaving?: boolean;
  isGenerating: boolean;
  onSubmit: () => void;
}

export function SubmitButton({
  isSaving,
  isGenerating,
  onSubmit,
}: Props) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      disabled={isSaving || isGenerating}
      className="w-full py-3 rounded-xl bg-blue-500 text-white"
    >
      {isSaving ? "Menyimpan..." : "Simpan Informasi Pribadi"}
    </button>
  );
}