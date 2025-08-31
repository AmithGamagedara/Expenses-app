import "./FilterPanel.css";
import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { EXPENSE_CATEGORIES } from "../../types/ExpenseCategory";

const FilterPanel: React.FC = () => {
  const { category, setCategory, sortBy, setSortBy, search, setSearch } =
    useContext(FilterContext);

  return (
    <div className="filter-panel">
      <div>
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {EXPENSE_CATEGORIES.map((cate) => (
            <option key={cate} value={cate}>
              {cate}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Sort By: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Date (New First)</option>
          <option value="amountAsc">Amount High to Low</option>
          <option value="amountDesc">Amount Low to High</option>
          <option value="dateAsc">Title A-Z</option>
        </select>
      </div>

      <div>
        <label>Search: </label>
        <input
          type="text"
          placeholder="Search by Title or Description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
