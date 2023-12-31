import React, {
  useState,
  useEffect,
  useReducer,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

function emailReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }
  return { value: '', isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] =
    useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    { value: '', isValid: null }
  );

  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(
        emailIsValid && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log('clean up function ');
      clearTimeout(identifier);
    };
    // }, [setFormIsValid, enteredEmail, enteredPassword]);
  }, [emailIsValid, enteredPassword]);

  // setFormIsValid(
  //   enteredEmail.includes('@') &&
  //     enteredPassword.trim().length > 6
  // );

  // add as dependencies what you are using in the side effect function
  // function will only run if at least one of these depencncies change

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.isValid &&
        event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false
              ? classes.invalid
              : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
