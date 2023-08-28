import Headings from './Headings';

function ChildContainer(props) {
  return (
    <>
      <Headings
        title={props.title}
        title2={props.title2}
        printMessage={props.printMessage}
      ></Headings>
      <div>{props.message}</div>
    </>
  );
}

export default ChildContainer;
