function Header(props) {
  return (
    <header>
      <div className='header'>
        <h1>React</h1>
        <button
          onClick={() => props.onOpenCart()}
          className='yourCart'
        >
          Your Cart <div> {props.mealsInCart}</div>
        </button>
      </div>
    </header>
  );
}

export default Header;
