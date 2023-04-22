import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseFom";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHnadler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    const showFormHandler = () => {
        setShowForm(true)
    }

    const hideFormHandler = () => {
        setShowForm(false)
    }

    return (
        <div className="new-expense">
            { showForm ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHnadler} onCancel={hideFormHandler}/>
                :
                <button onClick={showFormHandler}>Add new Expense</button>}


        </div>
    )
}

export default NewExpense;