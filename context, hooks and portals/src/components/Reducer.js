import { useReducer, useState } from 'react';

// const actions = {
//   increment: 'increment',
//   decrement: 'decrement',
// };

// function reducerFunction(state, action) {
//   if (action.type === actions.increment) {
//     return { count: state.count + 1 };
//   } else if (action.type === actions.decrement) {
//     return { count: state.count - 1 };
//   } else {
//     return state;
//   }
// }

const actions = {
  addTodo: 'addTodo',
  deleteTodo: 'delete',
  checkTodo: 'check',
};

function newTodo(todoValue) {
  return {
    key: Date.now(),
    name: todoValue,
    completed: false,
  };
}

function reducerFunc(todoState, action) {
  switch (action.type) {
    case actions.addTodo:
      return [
        ...todoState,
        newTodo(action.payload.todoValue),
      ];
      break;
    case actions.deleteTodo:
      return todoState.filter(
        (todo) => todo.key !== action.payload.toDoObject.key
      );
      break;
    case actions.checkTodo:
      return todoState.map((todo) => {
        return todo.key === action.payload.todoKey
          ? {
              ...todo,
              ...(todo.completed = !todo.completed),
            }
          : todo;
      });
      break;
    default:
      return todoState;
  }
}

function Reducer() {
  const [todos, dispatch] = useReducer(reducerFunc, []);

  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: actions.addTodo,
      payload: { todoValue: inputValue },
    });
    setInputValue('');
  }

  function handleDelete(todo) {
    dispatch({
      type: actions.deleteTodo,
      payload: { toDoObject: todo },
    });
  }

  function handleChange(key) {
    dispatch({
      type: actions.checkTodo,
      payload: { todoKey: key },
    });
  }

  console.log(todos);

  //   const [state, dispatch] = useReducer(reducerFunction, {
  //     count: 0,
  //   });

  //   function increment() {
  //     dispatch({ type: actions.increment });
  //   }

  //   function decrement() {
  //     dispatch({ type: actions.decrement });
  //   }

  return (
    <>
      {/* <div className='reducer'>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <p>{state.count}</p>
      </div> */}
      <hr></hr>
      <form className='reducerForm' onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className='todos'>
        {todos &&
          todos.map((todo, index) => (
            <>
              <div
                key={index}
                style={{ marginBlock: '5px' }}
              >
                <p
                  style={{
                    display: 'inline',
                  }}
                >
                  {todo.completed ? (
                    <s>{todo.name}</s>
                  ) : (
                    todo.name
                  )}
                </p>
                <input
                  type='checkbox'
                  onChange={() => handleChange(todo.key)}
                />
                <button
                  onClick={() => handleDelete(todo.key)}
                >
                  Delete
                </button>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Reducer;
