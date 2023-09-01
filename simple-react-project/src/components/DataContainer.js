function DataContainer(props) {
  return (
    <div className='dataContainer'>
      <div className='userInformation'>
        {props.userInfo.userName}
      </div>
      <div className='userInformation'>
        {props.userInfo.age}
      </div>
    </div>
  );
}

export default DataContainer;
