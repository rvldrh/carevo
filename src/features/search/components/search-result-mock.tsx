"use client";

interface Props {
  query: string;
}

export default function SearchResultMock({ query }: Props) {
  const mockData = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: `Hasil untuk "${query}" #${i + 1}`,
  }));

  return (
    <div className="flex flex-col gap-3">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl border hover:bg-gray-50 cursor-pointer transition"
        >
          <p className="text-sm font-medium text-black">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}