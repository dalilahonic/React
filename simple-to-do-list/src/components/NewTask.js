import { useState } from 'react';

export default function NewTask(props) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddTask(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add New Item</label>
      <input
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
