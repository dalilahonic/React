import { useState } from 'react';
import './Cart.css';

import CartMealItem from './CartMealItem';

function Cart(props) {
  const [orderP, setOrderP] = useState(false);

  const totalAmount = props.cartItems.reduce(
    (acc, curr) =>
      Number(curr.price.slice(1)) * Number(curr.quantity) +
      Number(acc),
    0
  );

  function handleOnClick() {
    props.onOrder();
    setOrderP(true);
  }

  return (
    <div className='overlay'>
      <div className='cart'>
        {props.cartItems.map((item, index) => (
          <CartMealItem
            mealName={item.mealName}
            price={item.price}
            quantity={item.quantity}
            key={index}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            onAddNewCartItem={props.onAddNewCartItem}
          />
        ))}

        {!orderP || (
          <div>
            {' '}
            <p> Thank you for ordering!</p>
            <button
              onClick={props.onClose}
              className='closeCartBtn'
            >
              CLose
            </button>
          </div>
        )}

        {!orderP && (
          <div className='amountParent'>
            <h1 className='totalAmountHeading'>
              Total Amount
            </h1>
            <h1 className='totalAmount'> ${totalAmount}</h1>
            <button
              onClick={props.onClose}
              className='closeCartBtn'
            >
              Close
            </button>
            <button
              onClick={() => handleOnClick()}
              className='orderBtn'
            >
              Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
