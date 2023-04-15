import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, {useState} from "react";
import Card from "../UI/Card";

function Expenses(props) {
    
    const [clickedYear, setClickedYear] = useState('2020');

    const filterChangeHnadler = (selectedYear) =>{
        setClickedYear(selectedYear);
    }

    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={clickedYear} onClickedYear={filterChangeHnadler}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}>
            </ExpenseItem>
        </Card>
    </div>
    )

}

export default Expenses