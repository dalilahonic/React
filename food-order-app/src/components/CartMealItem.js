import './CartMealItem.css';

function CartMealItem(props) {
  // console.log(props.cartItems);
  return (
    <div className='mealItem'>
      <h1 className='mealNameHeading'>{props.mealName}</h1>
      <h2 className='priceHeading'> {props.price} </h2>
      <div className='quantity'>x {props.quantity}</div>
    </div>
  );
}

export default CartMealItem;
