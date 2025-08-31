import './App.css'
import React, { useEffect, useState } from "react";
import { getExpenses } from "./api/api";
import ExpenseForm from "./components/Form/ExpenseForm";
import { Expense as ExpenseType } from "./types/types";
import Expenses from "./components/Expense/Expenses";
import { CardList } from "./components/Card/CardList";
import DataSorting from "./components/Sort/FilterPanel";
import { FilterProvider } from "./context/FilterContext";


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
      <h1 className="heading">💰 Personal Expense Tracker</h1>
      <FilterProvider>
      <div>
        <DataSorting />
      </div>
      <div className="expense-summary-card">
        <CardList data={data}/>
      </div>
      <div className="form-n-expenses-wrapper">
        <div className="form-container">
          <ExpenseForm onAdded={fetchdata} />
        </div>
        <div className="expenses-container">
          <Expenses data={data} onDeleted={fetchdata} />
        </div>
        </div>
        </FilterProvider>
    </div>
  );
}

export default App;
