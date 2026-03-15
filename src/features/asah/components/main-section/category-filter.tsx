export default function CategoryFilter() {
  const categories = [
    "UI/UX Designer",
    "Data Engineer",
    "Data Science",
    "AI/ML Engineer",
    "Back end",
    "Product",
  ];

  return (
    <section className="mt-8 flex justify-center">
      <div className="flex gap-4 bg-white p-3 rounded-2xl">
        {categories.map((item, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-full border ${
              i === 0
                ? "bg-blue-500 text-white"
                : "text-blue-500 border-blue-300"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}