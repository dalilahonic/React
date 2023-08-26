import './AddCard.css';
import { useState } from 'react';

function AddCard(props) {
  const [showForm, setShowForm] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  function handleClick() {
    setShowForm(true);
  }

  console.log(props);

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddCard({
      title: newTitle,
      description: newDescription,
      id: Date.now(),
    });
    setNewTitle('');
    setNewDescription('');
    // Hide the form
    setShowForm(false);
  }

  return (
    <div className='card'>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            placeholder='enter a title'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
          <input
            placeholder='enter a description'
            value={newDescription}
            onChange={(e) =>
              setNewDescription(e.target.value)
            }
          ></input>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
        </form>
      ) : (
        <button className='addBtn' onClick={handleClick}>
          +
        </button>
      )}
    </div>
  );
}

export default AddCard;
