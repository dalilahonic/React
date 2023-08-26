// import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import NewExpense from './components/newExpense/NewExpense';

import { useState } from 'react';
import ExpensesFilter from './components/ExpensesFilter';

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

const DUMMY_EXPENSES = [
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

export default function App(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const nums = [12, 43, 63, 19];

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    );
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <Card className='parentContainer'>
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* {filteredExpenses.length === 0 && (
          <p>No expenses found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {expenses.map((expense) => (
  <ExpenseItem
    key={expense.id}
    // key is a prop you can add to any component and we use it to keep trak of identity of each element in the list
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    paragraph1='Dalila'
    paragraph2='Honic'
  />
))} */}

        {expensesContent}

        {/* <ExpenseItem
          paragraph1='Dalila'
          paragraph2='Honic'
          title={2 + 3}
        ></ExpenseItem>
        <ExpenseItem title={99 - 97}></ExpenseItem>
        <ExpenseItem title={nums[1]}></ExpenseItem>
        <ExpenseItem title='insurance'></ExpenseItem> */}
      </Card>
    </>
  );
  // your custom components must start with an upper case character. lower case elements are built in html elements.
}
