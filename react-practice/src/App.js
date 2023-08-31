import Card from './components/Card';
import Wrapper from './components/Wrapper';
import AddCard from './components/AddCard';
import { useState } from 'react';

const initialCardData = [
  {
    title: 'product1',
    description: 'description1',
    id: 0,
  },
  {
    title: 'product2',
    description: 'description2',
    id: 1,
  },
  {
    title: 'product3',
    description: 'description3',
    id: 2,
  },
];

function App() {
  const [cardData, setCardData] = useState(initialCardData);

  function handleAddCard(newCard) {
    setCardData((prevState) => [...prevState, newCard]);
    // this function that we pass to setCardData will automatically recive previous state snapshot for that state for which you are calling the updating function
  }

  function handleNewMessage(message) {
    console.log(message);
  }

  return (
    <Wrapper>
      {/* <Card
        title='produkt1'
        description='deskripcija1'
      ></Card> */}

      {cardData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          description={data.description}
        ></Card>
      ))}
      <AddCard
        newMessage={handleNewMessage}
        onAddCard={handleAddCard}
      />
    </Wrapper>
  );
}

export default App;