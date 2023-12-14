import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from './store/store';

function App() {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleSubmit(e, inputValue) {
    e.preventDefault();
    dispatch(todoActions.addTask(inputValue));
    setInputValue('');
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    dispatch(todoActions.doTask());
  }

  function handleToggleDone(index) {
    dispatch(todoActions.doTask(index));
  }

  function handleRemoveTask(index) {
    dispatch(todoActions.removeTask(index));
  }

  return (
    <>
      <div className='main'>
        <div className='card'>
          <div className='input'>
            <form
              onSubmit={(e) => handleSubmit(e, inputValue)}
            >
              <input
                value={inputValue}
                onChange={(e) => handleChange(e)}
              />
              <button>Add</button>
            </form>
          </div>
          <div className='todos'>
            {todos.map((todo, index) => {
              return (
                <div className='todo'>
                  <input
                    type='checkbox'
                    onChange={() => handleToggleDone(index)}
                  />
                  <p
                    style={{
                      textDecoration: todo.done
                        ? 'line-through'
                        : '',
                    }}
                    key={index}
                  >
                    {todo.task}
                  </p>
                  <button
                    onClick={() => handleRemoveTask(index)}
                    className='delete'
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
