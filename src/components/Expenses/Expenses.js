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

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={clickedYear} onClickedYear={filterChangeHnadler} />

                {filteredExpensesByDate.map((expense) => (

                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
                }
            </Card>
        </div>
    )

}

export default Expenses