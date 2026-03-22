"use client";

import clsx from "clsx";
import Image from "next/image";

type Props = {
  title: string;
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
};

export function AccordionItem({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: Props) {
  return (
    <div
      className={clsx(
        "w-full rounded-2xl border transition-all overflow-hidden",
        isOpen ? "bg-blue-400 shadow-md" : "bg-white shadow-sm"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        <div className="flex items-center gap-4">
          <Image
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className={clsx(isOpen && "brightness-0 invert")}
          />
          <span
            className={clsx(
              "text-sm font-medium",
              isOpen ? "text-white" : "text-black"
            )}
          >
            {title}
          </span>
        </div>

        <Image
          src="/icons/arrow-down.svg"
          alt="arrow"
          width={20}
          height={20}
          className={clsx(
            "transition-transform",
            isOpen && "rotate-180 brightness-0 invert"
          )}
        />
      </button>

      {isOpen && <div className="bg-white p-4">{children}</div>}
    </div>
  );
}