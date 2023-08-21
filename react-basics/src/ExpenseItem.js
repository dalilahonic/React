import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseTitle = 'Car Insurance';

  return (
    <div className="main">
      <h1 className="mainHeading"> Expense Item</h1>
      {/* <h2>{1 + 1}</h2> */}
      <h2>{props.title}</h2>
      <h2>{expenseTitle}</h2>
    </div>
  );
  // can only return one element. inside this main element you can have multiple elements
  // props are 'attributes' of your custom HTML elements (props stand for properties)
}

export default ExpenseItem;
