import React, { useState } from "react";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";

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
                <ExpenseFilter
                    selected={clickedYear}
                    onClickedYear={filterChangeHnadler}
                />
                <ExpenseList items={filteredExpensesByDate}/>
            </Card>
        </div>
    )

}

export default Expenses