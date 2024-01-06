import { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changedTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changedTextHandler}>
        Change Text!
      </button>
    </div>
  );
}
