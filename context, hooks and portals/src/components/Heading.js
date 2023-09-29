import { useContext } from 'react';
import {
  MyContext,
  // headingToggleFunction,
} from '../context/MyContext';
import { headingContext } from '../context/MyContext';

export default function Heading({ headingClass }) {
  const { timesChanged } = useContext(MyContext);

  const [headingStyle, setHeadingStyle] =
    useContext(headingContext);

  // const headingToggleFun = useContext(
  //   headingToggleFunction
  // );

  // console.log(headingStyle, setHeadingStyle);

  function handleOnClick() {
    setHeadingStyle((prev) => !prev);
    // headingToggleFun();
  }

  return (
    <>
      <h1
        className={`heading ${headingClass} ${
          headingStyle ? 'gill-sans' : 'times-new-roman'
        }`}
      >
        heading
      </h1>
      <p> Heading changed: {timesChanged} times</p>
      <button onClick={handleOnClick}>Change style</button>
    </>
  );
}
