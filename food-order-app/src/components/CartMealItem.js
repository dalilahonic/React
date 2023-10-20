import './CartMealItem.css';

function CartMealItem(props) {
  function handleClick(e) {
    // console.log(e.target.innerText);
    const index = props.cartItems.findIndex(
      (el) => el.mealName === props.mealName
    );

    //.........+
    if (e.target.innerText === '+') {
      props.setCartItems(
        (prev) => [...prev],
        props.cartItems[index].quantity++
      );
    }

    //..................-
    else {
      if (props.cartItems[index].quantity > 1) {
        props.setCartItems(
          (prev) => [...prev],
          props.cartItems[index].quantity--
        );
      } else {
        props.setCartItems((prev) => {
          return prev
            .slice(0, index)
            .concat(prev.slice(index + 1));
        });
        props.setMealsInfo((prev) => {
          const cartItem = props.cartItems[index].mealName;
          const itemIndex = prev.find(
            (item) => item.mealName === cartItem
          );
          const newItems = [...prev];
          newItems[itemIndex].quantity = 0;
          return newItems;
        });
      }
    }
    props.onAddNewCartItem(e.target.innerText);
  }

  return (
    <div className='mealItem'>
      <h1 className='mealNameHeading'>{props.mealName}</h1>
      <h2 className='priceHeading'> {props.price} </h2>
      <div className='quantity'>x {props.quantity}</div>
      <div className='plus' onClick={handleClick}>
        +
      </div>
      <div className='minus' onClick={handleClick}>
        -
      </div>
    </div>
  );
}

export default CartMealItem;
