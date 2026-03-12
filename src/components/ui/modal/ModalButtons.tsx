interface Props {
  cancelText?: string;
  submitText?: string;
  onCancel: () => void;
  onSubmit: () => void;
}

export const ModalButtons = ({
  cancelText = "Batal",
  submitText = "Simpan",
  onCancel,
  onSubmit,
}: Props) => {
  return (
    <div className="flex justify-between gap-4 pt-6 mt-6">
      <button
        type="button"
        onClick={onCancel}
        className="px-6 py-2 rounded-lg border bg-gray-500 text-[var(--white)] hover:bg-gray-600 transition"
      >
        {cancelText}
      </button>

      <button
        type="button"
        onClick={onSubmit}
        className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {submitText}
      </button>
    </div>
  );
};