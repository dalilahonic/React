import './AddCard.css';
import { useState } from 'react';
import './Card.css';

function AddCard(props) {
  const [showForm, setShowForm] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  function handleClick() {
    setShowForm(true); 
  }
  // console.log(props);

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddCard({
      title: newTitle,
      description: newDescription,
      id: Date.now(),
    });

    setNewTitle('');
    setNewDescription('');
    setShowForm(false);
  }

  props.newMessage('this is a function from AddCard file');

  let newCardContent = showForm ? (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='enter a title'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></input>
      <input
        placeholder='enter a description'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></input>
      <button className='submitBtn' type='submit'>
        Submit
      </button>
    </form>
  ) : (
    <button className='addBtn' onClick={handleClick}>
      +
    </button>
  );

  return (
    <div className='new-card card'>{newCardContent}</div>
  );
}

export default AddCard;
