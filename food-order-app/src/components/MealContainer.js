import { useState } from 'react';
import './MealContainer.css';

function MealContainer(props) {
  const [amount, setAmount] = useState(0);

  const mealOrdered = {
    mealName: props.mealName,
    price: props.price,
    quantity: 0,
  };

  function handleClick() {
    setAmount((prev) => prev + 1);
    props.onAddNewItem(mealOrdered);
  }

  return (
    <main>
      <div className='mealContainer'>
        <h1>{props.mealName}</h1>
        <h3> {props.description}</h3>
        <h2> {props.price}</h2>
        <button
          className='addNewItemBtn'
          onClick={handleClick}
        >
          + Add
        </button>
        <h4>Amount</h4>
        <div className='amountContainer'>{amount}</div>
      </div>
    </main>
  );
}

export default MealContainer;
