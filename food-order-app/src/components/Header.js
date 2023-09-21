import './Header.css';

function Header(props) {
  return (
    <header>
      <div className='header'>
        <h1>Food Order App</h1>
        <button
          onClick={() => props.onOpenCart()}
          className='yourCart'
        >
          {' '}
          <i class='fa-solid fa-cart-shopping'></i>
          Your Cart <div> {props.mealsInCart}</div>
        </button>
      </div>
    </header>
  );
}

export default Header;
