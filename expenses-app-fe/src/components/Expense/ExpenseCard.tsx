import React from "react";
import "./ExpenseCard.css";

interface ExpenseCardProps {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  onDelete: (id: string) => void;
  onEdit: () => void;
}

const ExpenseCard = ({
  id,
  title,
  amount,
  category,
  date,
  description,
  onDelete,
  onEdit,
}: ExpenseCardProps) => {
  return (
    <div className="expense-card">
      <div className="expense-header">
        <h3 className="expense-title">{title}</h3>
        <h2 className="expense-amount">${amount}</h2>
      </div>

      <div className="expense-category-n-date">
        <span className="expense-category">{category}</span>
        <span className="expense-date">{new Date(date).toLocaleString()}</span>
      </div>

      <p className="expense-description">{description}</p>

      <div className="expense-actions">
        <button className="edit-btn" onClick={onEdit}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
