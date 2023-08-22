import './ExpenseItem.css';
import ExplanseInfo from './ExpanseInfo';
import Card from './Card';

function ExpenseItem(props) {
  const expenseTitle = 'Car Insurance';

  return (
    <Card className="main">
      <h1 className="mainHeading"> Expense Item</h1>
      {/* <h2>{1 + 1}</h2> */}
      <h2>{props.title}</h2>
      <h2>{expenseTitle}</h2>
      <ExplanseInfo
        paragraph1={props.paragraph1}
        paragraph2={props.paragraph2}
      ></ExplanseInfo>
    </Card>
  );

  /*
  function ExpenseItem ({title}) {
    // object destructuring
    return (
      ...
      <h2> {title} </h2>
    )
  }
  */

  // can only return one element. inside this main element you can have multiple elements
  // props are 'attributes' of your custom HTML elements (props stand for properties)
}

export default ExpenseItem;
