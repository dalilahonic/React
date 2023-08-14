import { useState } from 'react';

// function Square({ value }) {
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    // console.log('clicked');
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    //  we use fragments (<> and </>) to wrap multiple adjacent JSX elements like this:
    <>
      <div className="board">
        <div className="board-row">
          {/* <Square value="1" /> */}
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
