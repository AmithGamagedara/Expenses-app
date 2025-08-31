import React, { useState } from "react";
import { createExpense } from "../../api/api";
import { Expense } from "../../types/types";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onAdded: () => void;
}

function ExpenseForm({ onAdded }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newExpense: Omit<Expense, "id"> = {
        title,
        amount: parseFloat(amount),
        category,
        date,
        description,
      };
      await createExpense(newExpense);
      alert("Successfully Added");

      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
      setDescription("");

      onAdded();
    } catch (error) {
      alert("Error creating expense");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Expense</h2>
        <label>Title*</label>
        <input
          value={title}
          placeholder="e.g. Lunch at Cafe"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Amount*</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          required
        />
        <label>Category*</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Select Category</option>
          <option>Food & Dining</option>
          <option>Transportation</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Bills & Utilities</option>
          <option>Healthcare</option>
          <option>Travel</option>
          <option>Other</option>
        </select>
        <label>Date *</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="mm/dd/yyyy"
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional details about this expense..."
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
