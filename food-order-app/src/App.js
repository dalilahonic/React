import { useState } from 'react';
import Header from './components/Header';
import MealContainer from './components/MealContainer';
import MealsContainer from './components/MealsContainer';
import Cart from './components/Cart';

const mealsInfo = [
  {
    mealName: 'Spaghetti Carbonara',
    description:
      'Creamy pasta dish with bacon, eggs, and Parmesan cheese.',
    price: '$12',
  },
  {
    mealName: 'Chicken Alfredo',
    description:
      'Grilled chicken breast served with fettuccine pasta in creamy Alfredo sauce.',
    price: '$14',
  },
  {
    mealName: 'Margherita Pizza',
    description:
      'Classic pizza with tomato, fresh mozzarella, basil, and olive oil.',
    price: '$10',
  },
  {
    mealName: 'Caesar Salad',
    description:
      'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
    price: '$8',
  },
  {
    mealName: 'Grilled Salmon',
    description:
      'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    price: '$16',
  },
  {
    mealName: 'Vegetable Stir-Fry',
    description:
      'Assorted vegetables stir-fried with tofu in a savory sauce.',
    price: '$11',
  },
  {
    mealName: 'BBQ Ribs',
    description:
      'Tender, slow-cooked ribs glazed with barbecue sauce.',
    price: '$15',
  },
];

export default function App() {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);

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
  mealsInfo.forEach((el) => {
    cartItems.forEach((item) => {
      if (el.mealName === item.mealName) {
        el.quantity = item.quantity;
      }
    });
  });

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
      setCartAmount((prev) => prev - 1);
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
        {console.log(cartItems)}
      </MealsContainer>
      {cartOpen && (
        <Cart
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
