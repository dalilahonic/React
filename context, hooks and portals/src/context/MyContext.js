import { createContext, useState } from 'react';

export const MyContext = createContext();

//............................

export const headingContext = createContext();
export const headingToggleFunction = createContext();

export function HeadingProvider(props) {
  const [headingStyle, setHeadingStyle] = useState(true);

  function toggleStyle() {
    setHeadingStyle((prev) => !prev);
  }

  return (
    <headingContext.Provider
      value={[headingStyle, setHeadingStyle]}
    >
      <headingToggleFunction.Provider value={toggleStyle}>
        {props.children}
      </headingToggleFunction.Provider>
    </headingContext.Provider>
  );
}
