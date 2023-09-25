import { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export default function SideBar({ setHeadingClass }) {
  const { timesChanged, setTimesChanged } =
    useContext(MyContext);

  // console.log(timesChanged, setTimesChanged);

  function handleClick(color) {
    setHeadingClass(color);
    setTimesChanged((prev) => prev + 1);
  }

  return (
    <div>
      <ul>
        <li onClick={() => handleClick('red')}>Red</li>
        <li onClick={() => handleClick('blue')}>Blue</li>
        <li onClick={() => handleClick('orange')}>
          Orange
        </li>
        <li onClick={() => handleClick('violet')}>
          Violet
        </li>
        <li onClick={() => handleClick('pink')}>Pink</li>
        <li onClick={() => handleClick('green')}>Green</li>
      </ul>
      <p> Color changed: {timesChanged} times</p>
    </div>
  );
}
