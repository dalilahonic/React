import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  console.log('idk');

  // const [clicks, setClicks] = useState(0);

  return (
    <React.Fragment>
      <MainHeader
        isAuthenticated={isLoggedIn}
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
      </main>
    </React.Fragment>
  );
}

export default App;

// useEffect is called with 2 parameters. first parameter is a function that should be executed afeter every component evaluation if the specified dependencies changed. second parameter is an array of dependencies. whenever these dependencies change the function will run again.
