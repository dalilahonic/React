import { useState, useEffect } from 'react';
import Header from './components/Header';
import MealContainer from './components/MealContainer';
import MealsContainer from './components/MealsContainer';
import Cart from './components/Cart';

export default function App() {
  const [mealsInfo, setMealsInfo] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        'https://food-order-41be5-default-rtdb.firebaseio.com/meals.json'
      );

      const data = await response.json();
      setMealsInfo(data);
    }

    fetchMeals();
  }, []);

  useEffect(() => {
    mealsInfo.forEach((el) => {
      cartItems.forEach((item) => {
        if (el.mealName === item.mealName) {
          el.quantity = item.quantity;
        }
      });
    });
  });

  function handleAddNewItem(meal) {
    setOrdered(false);
    setCartAmount((prev) => prev + 1);

    const isMealInCart = cartItems.some(
      (item) => item.mealName === meal.mealName
    );

    // console.log(cartItems?.[0]?.mealName === meal.mealName);

    if (isMealInCart) {
      const index = cartItems.findIndex(
        (item) => item.mealName === meal.mealName
      );
      cartItems[index].quantity++;
    } else {
      setCartItems([
        ...cartItems,
        { ...meal, quantity: 1 },
      ]);
    }
  }

  function handleClose() {
    setCartOpen(false);
  }

  function handleOrder() {
    setCartItems([]);
    setCartAmount(0);
    setOrdered(true);
  }

  function handleAddNewCartItem(event) {
    if (event === '+') {
      setCartAmount((prev) => prev + 1);
    } else {
      if (cartAmount > 0) {
        setCartAmount((prev) => prev - 1);
      }
    }
  }

  if (ordered) {
    mealsInfo.forEach((el) => (el.quantity = 0));
  }

  return (
    <>
      <Header
        mealsInCart={cartAmount}
        onOpenCart={() => setCartOpen(true)}
      />
      <MealsContainer>
        {mealsInfo.map((meal, index) => (
          <MealContainer
            mealName={meal.mealName}
            description={meal.description}
            price={meal.price}
            key={index}
            onAddNewItem={handleAddNewItem}
            isOrdered={ordered}
            amount={meal.quantity ?? 0}
          />
        ))}
      </MealsContainer>
      {cartOpen && (
        <Cart
          setMealsInfo={setMealsInfo}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={handleClose}
          onOrder={handleOrder}
          onAddNewCartItem={handleAddNewCartItem}
        />
      )}
    </>
  );
}
