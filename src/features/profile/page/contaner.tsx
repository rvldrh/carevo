import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {children}
    </div>
  );
}