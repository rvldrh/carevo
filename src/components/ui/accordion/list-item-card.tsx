"use client";

import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  rightContent?: React.ReactNode;
};

export function ListItemCard({
  title,
  subtitle,
  onEdit,
  onDelete,
  rightContent,
}: Props) {
  return (
    <div className="w-full bg-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>
        {subtitle && (
          <span className="text-xs text-gray-600">{subtitle}</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {rightContent}

        {onEdit && (
          <button onClick={onEdit}>
            <Image
              src="/icons/edit.svg"
              alt="edit"
              width={16}
              height={16}
              className="w-5 h-5"
            />
          </button>
        )}

        {onDelete && (
          <button onClick={onDelete}>
            <Image
              src="/icons/close.svg"
              alt="delete"
              width={16}
              height={16}
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    </div>
  );
}