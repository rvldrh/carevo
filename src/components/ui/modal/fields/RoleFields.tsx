import type { RoleOptions } from "@/shared/types/ModalForm";

interface RoleFieldProps {
  label: string;
  name: string;
  value: string;
  options: RoleOptions[];
  onChange: (name: string, value: string) => void;
}

export const RoleField = ({
  label,
  name,
  value,
  options,
  onChange,
}: RoleFieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-700">
        {label} <span className="italic text-gray-400">Hanya boleh pilih satu</span>
      </label>

      <div className="flex flex-wrap gap-3">
        {options.map((role) => {
          const selected = value === role.value;

          return (
            <button
              key={role.value}
              type="button"
              onClick={() => onChange(name, role.value)}
              className={`
                px-4 py-2 rounded-full border text-sm transition
                ${
                  selected
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-blue-400 text-blue-500 hover:bg-blue-50"
                }
              `}
            >
              {role.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};