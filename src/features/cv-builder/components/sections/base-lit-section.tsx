"use client";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  emptyText?: string;
  buttonText: string;
};

export function BaseListSection<T>({
  items,
  renderItem,
  emptyText = "Belum ada data",
  buttonText,
}: Props<T>) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-3">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">
            {emptyText}
          </p>
        ) : (
          items.map(renderItem)
        )}
      </div>

      <button className="bg-blue-400 text-white px-5 py-2 rounded-xl text-sm font-semibold">
        {buttonText}
      </button>
    </div>
  );
}