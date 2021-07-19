import "./ExpenseItem.css"; //asa specificam ca dorim sa folosim css items aici
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    //iar aici adaugam clasele care le avem disponibile din css
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
