import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector(
    (state) => state.ui.cartIsVisible
  );
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(
    (state) => state.ui.notification
  );

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // async function sendCartData() {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending cart data',
    //     })
    //   );
    //   const response = await fetch(
    //     'https://react-10d3f-default-rtdb.firebaseio.com/cart.json',
    //     { method: 'PUT', body: JSON.stringify(cart) }
    //   );
    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed');
    //   }
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'success',
    //       title: 'Sucess!',
    //       message: 'Sent cart data successfully!',
    //     })
    //   );
    // }
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((err) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!',
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
