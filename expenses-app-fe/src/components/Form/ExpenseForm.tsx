import { Expense } from "../../types/types";
import "./ExpenseForm.css";
import { useExpenseForm } from "../../hooks/useExpenseForm";

interface ExpenseFormProps {
  onAdded: () => void;
  onUpdated: () => void;
  editExpense?: Expense | null;
  clearEdit: () => void;
}

function ExpenseForm({
  onAdded,
  onUpdated,
  editExpense,
  clearEdit,
}: ExpenseFormProps) {
  const {
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
  } = useExpenseForm({ editExpense, clearEdit, onAdded, onUpdated });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{editExpense ? "Edit Expense" : "Add New Expense"}</h2>
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
        <button type="submit">
          {editExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
