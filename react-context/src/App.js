import Heading from './components/Heading';
import SideBar from './components/SideBar';
import { useState } from 'react';
import { MyContext } from './context/MyContext';
import { HeadingProvider } from './context/MyContext';

function App() {
  const [headingClass, setHeadingClass] = useState('');
  const [timesChanged, setTimesChanged] = useState(0);

  console.log(App);
  console.log(SideBar);
  console.log(Heading);
  return (
    <>
      <MyContext.Provider
        value={{ timesChanged, setTimesChanged }}
      >
        <HeadingProvider>
          <Heading headingClass={headingClass} />
          <SideBar setHeadingClass={setHeadingClass} />
        </HeadingProvider>
      </MyContext.Provider>
    </>
  );
}

export default App;
