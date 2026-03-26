import type { ProftoResponse } from "@/features/profile/types/profto";

export default function CollaborationList({ profto }: { profto: ProftoResponse | null }) {
  const links = profto?.links || [];
  const email = profto?.email;

  if (links.length === 0 && !email) {
    return (
      <div className="text-center py-10 text-[var(--gray-500)]">
        Belum ada informasi kontak yang ditambahkan.
      </div>
    );
  }

  const items = [
    ...(email ? [{ title: "Email", value: email }] : []),
    ...links.map(link => ({ title: link.name || "Link", value: link.url || "" }))
  ];

  return (
    <div className="px-[5%] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {items.map((item) => (
        <div key={item.value}>
          <h3 className="text-2xl font-semibold text-black">{item.title}</h3>

          <p className="text-xl text-gray-500 mt-2 truncate max-w-[200px] mx-auto">
             {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}