import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { EXPENSE_CATEGORIES } from "../../types/ExpenseCategory";

const FilterPanel: React.FC = () => {
  const { category, setCategory, sortBy, setSortBy } = useContext(FilterContext);

  return (
    <div className="filter-panel">
      <label>Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        {EXPENSE_CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label>Sort By: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Default</option>
        <option value="amountAsc">Amount Ascending</option>
        <option value="amountDesc">Amount Descending</option>
        <option value="dateAsc">Date Ascending</option>
        <option value="dateDesc">Date Descending</option>
      </select>
    </div>
  );
};

export default FilterPanel;