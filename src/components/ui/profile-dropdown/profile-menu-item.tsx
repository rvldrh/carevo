type Props = {
  label: string;
  danger?: boolean;
};

export default function ProfileMenuItem({
  label,
  danger,
}: Props) {
  return (
    <li
      className={`px-6 py-4 hover:bg-gray-100 cursor-pointer ${
        danger ? "text-red-500" : ""
      }`}
    >
      {label}
    </li>
  );
}