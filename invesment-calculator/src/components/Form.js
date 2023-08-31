import Buttons from './Buttons';
import { useState } from 'react';

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [expectedInterest, setExpectedInterest] =
    useState('');
  const [investmentDuration, setInvesmentDuration] =
    useState('');

  function handleOnChange(value, setFunction) {
    setFunction(value);
  }

  function handeleSubmit(event) {
    event.preventDefault();

    const data = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedInterest: expectedInterest,
      invesmentDuration: investmentDuration,
    };

    if (Object.values(data).some((el) => !el)) return;

    props.onSubmitData(data);

    setCurrentSavings('');
    setExpectedInterest('');
    setInvesmentDuration('');
    setYearlySavings('');
  }

  return (
    <>
      <form onSubmit={handeleSubmit} className='form'>
        <div className='input-group'>
          <p>
            <label htmlFor='current-savings'>
              Current Savings ($)
            </label>
            <input
              type='number'
              id='current-savings'
              onChange={(event) =>
                handleOnChange(
                  event.target.value,
                  setCurrentSavings
                )
              }
              value={currentSavings}
            />
          </p>
          <p>
            <label htmlFor='yearly-contribution'>
              Yearly Savings ($)
            </label>
            <input
              type='number'
              id='yearly-contribution'
              onChange={(event) =>
                handleOnChange(
                  event.target.value,
                  setYearlySavings
                )
              }
              value={yearlySavings}
            />
          </p>
        </div>
        <div className='input-group'>
          <p>
            <label htmlFor='expected-return'>
              Expected Interest (%, per year)
            </label>
            <input
              type='number'
              id='expected-return'
              onChange={(event) =>
                handleOnChange(
                  event.target.value,
                  setExpectedInterest
                )
              }
              value={expectedInterest}
            />
          </p>
          <p>
            <label htmlFor='duration'>
              Investment Duration (years)
            </label>
            <input
              type='number'
              id='duration'
              onChange={(event) =>
                handleOnChange(
                  event.target.value,
                  setInvesmentDuration
                )
              }
              value={investmentDuration}
            />
          </p>
        </div>

        <Buttons
          onCalculate={handeleSubmit}
          onReset={props.onReset}
        ></Buttons>
      </form>
    </>
  );
}

export default Form;
