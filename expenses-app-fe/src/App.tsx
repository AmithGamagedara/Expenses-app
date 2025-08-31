import React, { useEffect, useState } from "react";
import { getExpenses } from "./api/api";
import ExpenseForm from "./components/Form/ExpenseForm";
import { Expense as ExpenseType } from "./types/types";
import Expenses from "./components/Expense/Expenses";
import CardList from "./components/Card/CardList";
import DataSorting from "./components/Sort/DataSorting";
import './App.css'

function App() {
  const [data, setData] = useState<ExpenseType[]>([]);

  const fetchdata = async () => {
    try {
      const response = await getExpenses();
      setData(response);
    } catch (error) {
      setData([]);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  // console.log(data)

  return (
    <div className="expense-tracker">
      <h1>💰 Personal Expense Tracker</h1>
      <div>
        <DataSorting />
      </div>
      <div>
        <CardList />
      </div>
      <div className="form-n-expenses-wrapper">
        <div className="form-container">
          <ExpenseForm onAdded={fetchdata} />
        </div>
        <div className="expenses-container">
          <Expenses data={data} onDeleted={fetchdata} />
        </div>
        </div>
    </div>
  );
}

export default App;
