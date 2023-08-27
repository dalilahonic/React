import './Card.css';

function Card(props) {
  return (
    <div className='card container'>
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
    </div>
  );
}

export default Card;
