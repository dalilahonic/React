import './ExpenseItem.css';
import ExplanseInfo from './ExpanseInfo';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const expenseTitle = 'Car Insurance';

  const [title, setTitle] = useState(props.title);

  // console.log('react');

  function clickHandler() {
    // console.log('string');
    setTitle('new title');
  }

  // useState must always be called inside react component functions and they shouldn't be called inside nested functions

  // return (
  //   <Card className='main'>
  //     <h1 className='mainHeading'> Expense Item</h1>
  //     {/* <h2>{1 + 1}</h2> */}
  //     {/* <h2>{props.title}</h2> */}
  //     <h2>{title}</h2>
  //     <h2>{expenseTitle}</h2>
  //     <ExplanseInfo
  //       paragraph1={props.paragraph1}
  //       paragraph2={props.paragraph2}
  //     ></ExplanseInfo>
  // {/* <button onClick={() => console.log('DA')}> Evo Klikni </button> */}
  // <button className='expense-item-button' onClick={clickHandler}> Click this </button>
  //   </Card>
  // );

  return (
    <Card className='main'>
      <h1 className='mainHeading'>Expense Item</h1>
      <h2>{title}</h2>
      <h2>Amount: {props.amount}</h2>
      <ExplanseInfo
        paragraph1={props.paragraph1}
        paragraph2={props.paragraph2}
      ></ExplanseInfo>
      <p>{props.date.toLocaleDateString()}</p>
      <button
        className='expense-item-button'
        onClick={clickHandler}
      >
        Click this
      </button>
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
