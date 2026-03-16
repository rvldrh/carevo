"use client";

import { useState } from "react";

export default function CategoryFilter() {
  const categories = [
    "UI/UX Designer",
    "Data Engineer",
    "Data Science",
    "AI/ML Engineer",
    "Back end",
    "Product",
  ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <section className="mt-8 flex justify-center">
      <div className="flex gap-4 bg-white p-3 rounded-2xl">

        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full border transition
                ${
                  isActive
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-blue-500 border-blue-300 hover:bg-blue-50"
                }
              `}
            >
              {category}
            </button>
          );
        })}

      </div>
    </section>
  );
}