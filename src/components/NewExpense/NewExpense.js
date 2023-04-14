import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseFom";

const NewExpense = (props) => {

    const saveExpenseDataHnadler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHnadler}/>
    </div>
)
}

export default NewExpense;