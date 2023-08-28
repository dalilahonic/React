function Headings(props) {
  return (
    <>
      <h1 onClick={() => props.printMessage('important')}>
        {props.title}
      </h1>
      <h2
        onClick={() => props.printMessage('something else')}
      >
        {props.title2}
      </h2>
    </>
  );
}
 
export default Headings;
