// import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

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

export default function App() {
  const nums = [12, 43, 63, 19];
  return (
    <>
      <ExpenseItem title={2 + 3}></ExpenseItem>
      <ExpenseItem title={99 - 97}></ExpenseItem>
      <ExpenseItem title={nums[1]}></ExpenseItem>
      <ExpenseItem title="insurance"></ExpenseItem>
    </>
  );
  // your custom components must start with an upper case character. lower case elements are built in html elements.
}
