import React, { useContext } from "react";
import "./Expenses.css";
import { deleteExpense } from "../../api/api";
import ExpenseCard from "./ExpenseCard";
import { FilterContext } from "../../context/FilterContext";

interface ExpensesProps {
  data: any[];
  onDeleted: () => void;
  onEdit: (expense: any) => void;
}

const Expenses = ({ data, onDeleted, onEdit }: ExpensesProps) => {
  const { category, sortBy, search } = useContext(FilterContext);

  const handleDelete = async (id: string) => {
    try {
      await deleteExpense(id);
      alert("Expense Deleted");
      onDeleted();
    } catch {
      alert("Error deleting");
    }
  };

  //filter expenses by category
  let filteredData = category
    ? data.filter((expense) => expense.category === category)
    : data;

  //sorting expences
  if (sortBy === "amountAsc") {
    filteredData.sort((a, b) => b.amount - a.amount);
  } else if (sortBy === "amountDesc") {
    filteredData.sort((a, b) => a.amount - b.amount);
  } else if (sortBy === "dateAsc") {
    filteredData.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filteredData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  //searchingg
  if (search) {
    const searchLower = search.toLowerCase();
    filteredData = filteredData.filter(
      (expense) =>
        expense.category.toLowerCase().includes(searchLower) ||
        expense.description.toLowerCase().includes(searchLower)
    );
  }

  return (
    <div className="expenses">
      <div className="expenses-list-header">
        <h2>Your Expenses</h2>
        <p>
          Showing {filteredData.length} of {data.length} expenses
        </p>
      </div>
      {filteredData.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Expenses Found</p>
      ) : (
        filteredData.map((data, idx) => (
          <ExpenseCard
            key={idx}
            id={data.id}
            title={data.title}
            amount={data.amount}
            category={data.category}
            date={data.date}
            description={data.description}
            onDelete={handleDelete}
            onEdit={() => onEdit(data)}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
