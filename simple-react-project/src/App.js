import DataContainer from './components/DataContainer';
import UserInput from './components/UserInput';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);

  function handleData(data) {
    setUserData((prevState) => [...prevState, data]); 
  }

  console.log(userData);
  return (
    <>
      <UserInput onSubmitData={handleData} />;
      {userData
        ? userData.map((data, index) => (
            <DataContainer
              userInfo={data}
              key={index}
            />
          ))
        : ''}
    </>
  );
}

export default App;
