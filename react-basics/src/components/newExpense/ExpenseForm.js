import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUsesrInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // });

  // function titleChangeHandler(event) {

  // // DON'T DO THIS
  //   // setUsesrInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });

  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: event.target.value,
  //   };
  // });

  // whenerver your state update depends on the previous state use this function synthax

  // }

  // console.log(userInput.enteredTitle);

  function titleChangeHandler(event) {
    // console.log(event);
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  // function inputChangeHadler(identefier, value) {
  //   if (identefier === 'title') {
  //     setEnteredTitle(value);
  //   } else if (identefier === 'amount') {
  //     setEnteredAmount(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // }
  // we can use this one function for all the inputs and we can identify different inputs by event object and update the state

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label> Title </label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            // onChange={(event) =>
            // inputChangeHadler('title', event.target.value)
            // }
          />
        </div>
        <div className='new-expense__control'>
          <label> Amount </label>
          <input
            type='number'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label> Date </label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense </button>
      </div>
    </form>
  );
}

// let obj = {
//   ime: 'dalila',
//   prezime: 'honic',
// };

// let newObj = { ...obj };
// console.log(newObj);

export default ExpenseForm;
