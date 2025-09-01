import React from 'react'
import "./CardList.css"
import { Expense } from '../../types/types'
import { EXPENSE_CATEGORIES } from '../../types/ExpenseCategory'

interface CardListProps {
  data: Expense[];
}

export const CardList = ({data}: CardListProps) => {

  const total = data.reduce((sum, e) => sum + e.amount, 0)

  const now = new Date();
  const monthTotal = data
    .filter((e) => {
      const d = new Date(e.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    })
    .reduce((sum, e) => sum + e.amount, 0);


    const days = Array.from(new Set(data.map(e => new Date(e.date).toDateString()))).length;
  const avgDaily = days ? total / days : 0;
  
  return (
    <div className="summary-cards">
            <div className="summary-card">
                <h3>Total Expenses</h3>
                <div className="amount">${total.toFixed(2)}</div>
            </div>
            <div className="summary-card">
                <h3>This Month</h3>
                <div className="amount">${monthTotal.toFixed(2)}</div>
            </div>
            <div className="summary-card">
                <h3>Average Daily</h3>
                <div className="amount">{avgDaily.toFixed(2)}</div>
            </div>
            <div className="summary-card">
                <h3>Categories</h3>
                <div className="amount">{EXPENSE_CATEGORIES.length}</div>
            </div>
        </div>
  )
}

export default CardList