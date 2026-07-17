"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { calculators } from "@/src/constants/calculators";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return [];

    return calculators
      .filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative mt-12 w-full max-w-3xl">

      <input
        type="text"
        placeholder="Pesquisar calculadoras..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-16 w-full rounded-2xl border border-gray-300 bg-white px-6 text-lg shadow-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      {filtered.length > 0 && (
        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

          {filtered.map((calculator) => (

            <Link
              key={calculator.slug}
              href={`/calculators/${calculator.slug}`}
              className="block border-b border-gray-100 px-6 py-4 transition hover:bg-blue-50 last:border-0"
            >
              <div className="font-semibold">
                {calculator.title}
              </div>

              <div className="text-sm text-gray-500">
                {calculator.category}
              </div>

            </Link>

          ))}

        </div>
      )}

    </div>
  );
}