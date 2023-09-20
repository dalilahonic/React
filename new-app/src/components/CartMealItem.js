function CartMealItem(props) {
  // console.log(props.cartItems);
  return (
    <div className='mealItem'>
      <h1> {props.mealName} </h1>
      <h2> {props.price} </h2>
    </div>
  );
}

export default CartMealItem;
