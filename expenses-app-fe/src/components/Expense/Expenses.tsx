import React from "react";
import "./Expenses.css";
import { deleteExpense } from "../../api/api";
import ExpenseCard from "./ExpenseCard";

interface ExpensesProps {
  data: any[];
  onDeleted: () => void;
}

const Expenses = ({ data, onDeleted }: ExpensesProps) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteExpense(id);
      alert("Expense Deleted");
      onDeleted();
    } catch {
      alert("Error deleting");
    }
  };

  return (
    <div className="expenses">
      <div className="expenses-list-header">
        <h2>Your Expenses</h2>
        <p>Showing 12 of 45 expenses</p>
      </div>
      {data.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        data.map((data, idx) => (
          <ExpenseCard
            key={idx}
            id={data.id}
            title={data.title}
            amount={data.amount}
            category={data.category}
            date={data.date}
            description={data.description}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
