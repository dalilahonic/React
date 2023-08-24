import './ExpanseInfo.css';

function ExplanseInfo(props) {
  return (
    <>
      <p className='firstName'>{props.paragraph1}</p>
      <p className='lastName'>{props.paragraph2}</p>
    </>
  );
}

export default ExplanseInfo;
