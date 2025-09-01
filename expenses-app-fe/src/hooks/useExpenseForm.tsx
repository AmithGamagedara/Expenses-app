import { useState, useEffect } from "react";
import { createExpense, updateExpense } from "../api/api";
import { Expense } from "../types/types";

interface UseExpenseFormProps {
  editExpense?: Expense | null;
  clearEdit: () => void;
  onAdded: () => void;
  onUpdated: () => void;
}

export function useExpenseForm({
  editExpense,
  clearEdit,
  onAdded,
  onUpdated,
}: UseExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount.toString());
      setCategory(editExpense.category);
      setDate(editExpense.date);
      setDescription(editExpense.description || "");
    } else {
      clearForm();
    }
  }, [editExpense]);

  const clearForm = () => {
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

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

      if (editExpense) {
        await updateExpense(editExpense.id, newExpense);
        alert("Expense Updated!");
        clearEdit();
        onUpdated();
      } else {
        await createExpense(newExpense);
        alert("Successfully Added");
        onAdded();
      }

      clearForm();
    } catch (error) {
      alert("Error Saving Expense");
    }
  };

  return {
    title,
    setTitle,
    amount,
    setAmount,
    category,
    setCategory,
    date,
    setDate,
    description,
    setDescription,
    handleSubmit,
    clearForm,
  };
}
