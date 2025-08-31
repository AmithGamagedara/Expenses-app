import React from "react";
import { deleteExpense } from "../../api/api";

interface ExpensesProps {
  data: any[];
  onDeleted: () => void;
}

const Expenses = ({data,onDeleted}: ExpensesProps) => {

  const handleDelete = async (id: string) => {
    try {
        await deleteExpense(id);
        alert("Expense Deleted");
        onDeleted();
    } catch {
        alert ("Error deleting")
    }
  }

  return (
    <div style={{
    background: "white",
    borderRadius: "18px",
    padding: "12px",
    marginBottom: "10px",
    alignItems: "center"
  }}>
      <div>
        <h2>Your Expenses</h2>
        <p>Showing 12 of 45 expenses</p>
      </div>
      {data.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        data.map((data, idx) => (
          <div key={idx}>
            <div>
              <h3>{data.title}</h3>
              <h2>${data.amount}</h2>
              <p>
                {data.category} {new Date(data.date).toLocaleDateString()}
              </p>
              <p>{data.description}</p>
              <button>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(data.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Expenses;
