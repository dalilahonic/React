import Heading from './components/Heading';
import SideBar from './components/SideBar';
import { useState } from 'react';
import { MyContext } from './context/MyContext';
import { HeadingProvider } from './context/MyContext';
import Reducer from './components/Reducer';
import Ref from './components/Ref';
import OpenModal from './components/OpenModal';

function App() {
  const [headingClass, setHeadingClass] = useState('');
  const [timesChanged, setTimesChanged] = useState(0);

  return (
    <>
      <MyContext.Provider
        value={{ timesChanged, setTimesChanged }}
      >
        <HeadingProvider>
          <Heading headingClass={headingClass} />
          <SideBar
            setHeadingClass={setHeadingClass}
            headingClass={headingClass}
          />
        </HeadingProvider>
      </MyContext.Provider>
      <Reducer />
      <Ref />
      <OpenModal />
    </>
  );
}

export default App;
