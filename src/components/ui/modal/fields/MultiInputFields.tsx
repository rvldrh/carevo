interface MultiInputFieldProps {
  label: string;
  name: string;
  values: string[];
  onChange: (name: string, values: string[]) => void;
}

export const MultiInputField = ({
  label,
  name,
  values,
  onChange,
}: MultiInputFieldProps) => {
  const handleChange = (index: number, value: string) => {
    const updated = [...values];
    updated[index] = value;
    onChange(name, updated);
  };

  const addField = () => {
    onChange(name, [...values, ""]);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xl font-medium">{label}</label>

      {values.map((role, index) => (
        <input
          key={`${name}-${role}`}
          value={role}
          onChange={(e) => handleChange(index, e.target.value)}
          className="border border-black rounded-lg h-[43px] px-3"
        />
      ))}

      <button
        type="button"
        onClick={addField}
        className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl"
      >
        Tambah Role
      </button>
    </div>
  );
};