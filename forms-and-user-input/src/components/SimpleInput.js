import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] =
    useState(false);
  const [enteredNameTouched, setEnteredNameTouched] =
    useState(false);

  // const enteredNameIsValid =

  useEffect(() => {
    if (enteredNameIsValid)
      console.log('entered name is valied');
  }, [enteredNameIsValid]);

  // const nameInputRef = useRef();

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);

    if (event.target.value.trim().length >= 1) {
      setEnteredNameIsValid(true);
    }
  }

  function nameInputBlurHandler() {
    setEnteredNameTouched(true);

    if (enteredName.trim().length < 1) {
      setEnteredNameIsValid(false);
    }
  }

  function formSubmissionHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim().length < 1) {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
    }

    console.log(enteredName);
    setEnteredName('');

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // not ideal
    // nameInputRef.current.value = '';
  }

  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          //   ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className='error-text'>
          Name must not be empty.
        </p>
      )}
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
