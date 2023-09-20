import './Cart.css';

import CartMealItem from './CartMealItem';

function Cart(props) {
  console.log(props.cartItems);

  const totalAmount = props.cartItems.reduce(
    (acc, curr) =>
      Number(curr.price.slice(1)) + Number(acc),
    0
  );

  return (
    <div className='overlay'>
      <div className='cart'>
        {props.cartItems.map((item) => (
          <CartMealItem
            mealName={item.mealName}
            price={item.price}
          />
        ))}

        <div className='amountParent'>
          <h1 className='totalAmountHeading'>
            Total Amount
          </h1>
          <h1 className='totalAmount'> ${totalAmount}</h1>
          <button className='closeCartBtn'> Close </button>
          <button className='orderBtn'> Order </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
