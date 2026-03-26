import { create } from "zustand";

interface SearchItem {
  id: number;
  title: string;
  type: "user" | "community" | "post";
}

interface SearchState {
  query: string;
  results: SearchItem[];
  setQuery: (query: string) => void;
  clear: () => void;
}


const MOCK_DATA: SearchItem[] = [
  { id: 1, title: "UI/UX Designer Community", type: "community" },
  { id: 2, title: "Frontend Developer Indonesia", type: "community" },
  { id: 3, title: "Belajar React dari Nol", type: "post" },
  { id: 4, title: "Bagas Aditha Pratama", type: "user" },
  { id: 5, title: "Cyber Security Community", type: "community" },
  { id: 6, title: "Tips jadi UI Designer", type: "post" },
];

export const useSearch = create<SearchState>((set) => ({
  query: "",
  results: [],

  setQuery: (query) =>
    set(() => {
      const filtered = MOCK_DATA.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      return {
        query,
        results: query ? filtered : [],
      };
    }),

  clear: () =>
    set({
      query: "",
      results: [],
    }),
}));