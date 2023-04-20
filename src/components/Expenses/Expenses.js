import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";
import Card from "../UI/Card";

function Expenses(props) {

    const [clickedYear, setClickedYear] = useState('2020');

    const filterChangeHnadler = (selectedYear) => {
        setClickedYear(selectedYear);

    };

    const filteredExpensesByDate = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === clickedYear)
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpensesByDate.length > 0) {
        expensesContent = filteredExpensesByDate.length > 0 && filteredExpensesByDate.map((expense) => (

            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={clickedYear}
                    onClickedYear={filterChangeHnadler}
                />
                {expensesContent}
            </Card>
        </div>
    )

}

export default Expenses