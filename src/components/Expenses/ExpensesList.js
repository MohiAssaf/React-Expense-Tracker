import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses found.</h2>
    }
    return (
        <ul className="expenses-list">
            {
            props.items.length > 0 
            && 
            props.items.map((expense) => (

                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            }
        </ul>
    )
}

export default ExpenseList;