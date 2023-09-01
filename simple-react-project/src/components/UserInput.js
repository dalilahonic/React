import { useState } from 'react';

function UserInput(props) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const userInputData = {
    userName: userName,
    age: age,
  };

  function onSubmitData(e) {
    e.preventDefault();
    if (
      Object.values(userInputData).some(
        (data) => !data || userInputData.age < 0
      )
    ) {
      return;
    }
    props.onSubmitData(userInputData);
    setUserName('');
    setAge('');
  }

  return (
    <form onSubmit={onSubmitData} className='userInputForm'>
      <label> Username</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type='text'
        value={userName}
      ></input>
      <label>Age</label>
      <input
        onChange={(e) => setAge(e.target.value)}
        type='number'
        value={age}
      ></input>
      <button onClick={onSubmitData}> Add User</button>
    </form>
  );
}

export default UserInput;
