import './App.css';
import React from 'react';
import { CardType, cards, shuffleDeck } from './helper';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const initialDeck: CardType[] = shuffleDeck([...cards]);

  const deal = () => {
    // Add more game logic here
  };

  const hit = () => {
    // Add more game logic here
  };
  const stand = () => {
    // Add more game logic here
  };

  return (
    <div className="container">
      <h1>Blackjack</h1>
      <h2>Work In Progress!</h2>
      <button onClick={deal} disabled>
        Deal
      </button>
      <button onClick={hit} disabled>
        Hit
      </button>
      <button onClick={stand} disabled>
        Stand
      </button>
      <div className="cards">
        {initialDeck.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
