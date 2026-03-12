interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
}

export const TextField = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xl font-medium">{label}</label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="border border-black rounded-lg h-[43px] px-3"
      />
    </div>
  );
};