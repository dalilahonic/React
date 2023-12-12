import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from './store/store';

function App() {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleClick(inputValue) {
    dispatch(todoActions.addTask(inputValue));
  }

  return (
    <div className='main'>
      <div className='card'>
        <div className='input'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => handleClick(inputValue)}>
            Add
          </button>
        </div>
        <div className='todos'>
          {todos.map((todo, index) => {
            return (
              <div className='todo'>
                <input type='checkbox' />
                <p key={index}>{todo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
