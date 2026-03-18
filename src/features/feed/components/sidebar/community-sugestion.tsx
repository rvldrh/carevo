export default function CommunitySuggestion() {
  const items = [
    "Komunitas UI/UX",
    "Komunitas CyberSecurity",
    "Komunitas Frontend",
    "Komunitas Backend",
    "Komunitas AI"
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-md p-4">
      <h3 className="font-semibold mb-4">
        Bergabung Ke Komunitas
      </h3>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <img
              src="https://placehold.co/36x36"
              className="w-9 h-9 rounded-full"
            />

            <span className="flex-1 text-xs font-semibold">
              {item}
            </span>

            <button className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full">
              Gabung
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}