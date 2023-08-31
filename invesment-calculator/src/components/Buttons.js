function Buttons(props) {
  return (
    <p className='actions'>
      <button onClick={props.onReset} type='reset' className='buttonAlt'>
        Reset
      </button>
      <button
        onChange={props.onCalculate}
        type='submit'
        className='button'
      >
        Calculate
      </button>
    </p>
  );
}

export default Buttons;
