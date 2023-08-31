import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App(props) {
  const [invesmentData, setInvesmentData] = useState(null);

  function handleFormSubmit(data) {
    setInvesmentData(data);
    // console.log(invesmentData);
  }

  let invesmentDurationValue;

  if (invesmentData) {
    invesmentDurationValue =
      invesmentData.invesmentDuration;
  }

  return (
    <>
      <Header></Header>
      <Form
        onSubmitData={handleFormSubmit}
        onReset={() => setInvesmentData(null)}
      ></Form>
      {invesmentData ? (
        <Table
          dataToTable={invesmentData}
          invesmentDurationProp={invesmentDurationValue}
        />
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

export default App;
