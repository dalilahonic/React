import ChildContainer from './ChildContainer';

function MainContainer(props) {
  return (
    <div>
      {/* <Headings title='main' title2='another'></Headings> */}
      <ChildContainer
        message={props.message}
        title={props.title}
        title2={props.title2}
        printMessage={props.printMessage}
      ></ChildContainer>
    </div>
  );
}

export default MainContainer;
