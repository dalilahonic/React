import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'red' : 'black')}
  }

  & input {
    display: block;
    width: 100%;
    // border: 1px solid #ccc;
    border: 1px solid ${(props) =>
      props.invalid ? 'red' : '#ccc'}
      background: ${(props) =>
        props.invalid ? '#ffd7d7' : 'transparent'}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background-color: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className='form-control'> */}
      {/* <div
        className={`form-control ${
          !isValid ? 'invalid' : ''
        }`}
      > */}
      <FormControl
        invalid={!isValid}
        className={!isValid && 'invalid'}
      >
        <label
        // style={{ color: !isValid ? 'red' : 'black' }}
        >
          Course Goal
        </label>
        <input
          style={
            {
              // borderColor: !isValid ? 'red' : 'black',
              // background: !isValid ? 'salmon' : 'transparent',
            }
          }
          type='text'
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
        {/* </div> */}
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
