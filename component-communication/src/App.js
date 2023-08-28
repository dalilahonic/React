import MainContainer from './MainContainer';
import { useState } from 'react';

function App() {
  const [heading, setHeading] = useState('change this');
  
  function print(message) {
    setHeading(message);
  }

  return (
    <>
      <MainContainer
        title={heading}
        title2='another one'
        message='string'
        printMessage={print}
      ></MainContainer>
      <h1>{heading}</h1>
    </>
  );
}

export default App;
