interface Props {
  form: React.ReactNode;
  preview: React.ReactNode;
}

export function CVLayout({ form, preview }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white min-h-screen">
      <div className="border rounded-2xl overflow-hidden shadow-sm h-[calc(100vh-3rem)]">
        {form}
      </div>
      <div className="bg-gray-50 rounded-2xl border h-[calc(100vh-3rem)] overflow-y-auto">
        {preview}
      </div>
    </div>
  );
}