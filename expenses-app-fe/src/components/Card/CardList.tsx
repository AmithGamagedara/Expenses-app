import React from 'react'
import "./CardList.css"


function CardList() {

  
  return (
    <div className="summary-cards">
            <div className="summary-card">
                <h3>Total Expenses</h3>
                <div className="amount">$1,234.56</div>
            </div>
            <div className="summary-card">
                <h3>This Month</h3>
                <div className="amount">$856.23</div>
            </div>
            <div className="summary-card">
                <h3>Average Daily</h3>
                <div className="amount">$42.18</div>
            </div>
            <div className="summary-card">
                <h3>Categories</h3>
                <div className="amount">6</div>
            </div>
        </div>
  )
}

export default CardList