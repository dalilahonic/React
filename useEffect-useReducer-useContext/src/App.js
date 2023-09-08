import React, {
  useState,
  useEffect,
  useReducer,
} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

//useReducer returns array with 2 values. first value is the latest state snapshot, second value is a function that specifies how should the state be updated.

// function reducerFn(state, action) {
//   console.log(action, state); // {type: 'USER_CLICKED'} 12

//   if (action.type === 'USER_CLICKED') {
//     return {
//       ...state,
//       age: state.age + 1,
//     };
//   }

//   if (action.type === 'USER_HOVERED') {
//     return {
//       ...state,
//       age: state.age + 10,
//     };
//   }

//   if (action.type === 'USER_INPUT') {
//     return {
//       ...state,
//       fName: action.value,
//       age: 0,
//     };
//   }
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [buttonState, dispatchFn] = useReducer(reducerFn, {
  //   fName: 'Dalila',
  //   age: 0,
  // });

  // function handleClick() {
  //   dispatchFn({ type: 'USER_CLICKED' });
  // }

  // function handleChange(e) {
  //   dispatchFn({
  //     type: 'USER_INPUT',
  //     value: e.target.value,
  //   });
  //   e.target.value = '';
  // }

  // function handleHover() {
  //    dispatchFn({ type: 'USER_HOVERED' });
  // }

  // const userLogInInfo = localStorage.getItem('isLoggedIn');
  // if (userLogInInfo === 'LOGGED_IN') {
  //   setIsLoggedIn(true);
  // }
  // this creates infinite loop because whenever we call setLoggedIn function the App function is executed again.

  useEffect(() => {
    const userLogInInfo =
      localStorage.getItem('isLoggedIn');
    if (userLogInInfo === 'LOGGED_IN') {
      setIsLoggedIn(true);
    }
  }, []);
  // this function runs after every component is evaluated and only if the depencies changed.
  // this function only runs once because there are no dependencies

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // const [clicks, setClicks] = useState(0);
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <MainHeader
          // isAuthenticated={isLoggedIn}
          onLogout={logoutHandler}
        />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}

          {/* <div>
          <p>you clicked {clicks} </p>
          <button
            onClick={() => setClicks((prev) => prev + 1)}
          >
            Click
          </button>
        </div> */}
          {/* <input onBlur={handleChange}></input>
        <button
          // onMouseEnter={handleHover}
          onClick={handleClick}
        >
          Increment age: {buttonState.fName},{' '}
          {buttonState.age}
        </button> */}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;

// useEffect is called with 2 parameters. first parameter is a function that should be executed afeter every component evaluation if the specified dependencies changed. second parameter is an array of dependencies. whenever these dependencies change the function will run again.
