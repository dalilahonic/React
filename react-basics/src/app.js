// import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import NewExpense from './components/newExpense/NewExpense';

// export default function App() {
//   const [activeIndex, setIndex] = useState(0);
//   const [count, setCount] = useState(0);
//   const [heading, setHeading] = useState(
//     'this is a heading'
//   );

//   function handleClick() {
//     setHeading('this is a new heading');
//     setIndex(activeIndex === 0 ? 1 : 0);
//   }

//   return (
//     <div>
//       <h1
//         className={activeIndex === 0 ? 'red' : 'blue'}
//         onClick={() => handleClick()}
//       >
//         {heading}
//       </h1>

//       <button onClick={() => setCount(count + 1)}>
//         Plus 1
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Minus 1
//       </button>
//       <p>{count}</p>
//     </div>
//   );
// }

// components - reausable building blocks in user interface

export default function App(props) {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const nums = [12, 43, 63, 19];

  function addExpanseHandler(expense) {
    console.log(expense);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpanseHandler} />
      <Card className='parentContainer'>
        <ExpenseItem
          paragraph1='Dalila'
          paragraph2='Honic'
          title={2 + 3}
        ></ExpenseItem>
        <ExpenseItem title={99 - 97}></ExpenseItem>
        <ExpenseItem title={nums[1]}></ExpenseItem>
        <ExpenseItem title='insurance'></ExpenseItem>
      </Card>
    </>
  );
  // your custom components must start with an upper case character. lower case elements are built in html elements.
}
