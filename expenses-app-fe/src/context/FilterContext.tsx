// FilterContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface FilterContextType {
  category: string;
  setCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  category: "",
  setCategory: () => {},
  sortBy: "",
  setSortBy: () => {},
});

interface Props {
  children: ReactNode;
}

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [category, setCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  return (
    <FilterContext.Provider value={{ category, setCategory, sortBy, setSortBy }}>
      {children}
    </FilterContext.Provider>
  );
};