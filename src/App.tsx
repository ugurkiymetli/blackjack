import './App.css';
import React, { useEffect, useState } from 'react';
import {
  CardType,
  cards,
  shuffleDeck,
  randomIntFromInterval,
  GameState,
  getScore,
  delay,
} from './helper';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';

const App: React.FC = () => {
  const initialDeck: CardType[] = shuffleDeck([...cards]);

  const [gameState, setGameState] = useState(GameState.NotStarted);
  const [playerCards, setPlayerCards] = useState<CardType[]>([]);
  const [dealerCards, setDealerCards] = useState<CardType[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [dealerCardsHidden, setDealerCardsHidden] = useState(true);

  const [winner, setWinner] = useState<'' | 'player' | 'dealer' | 'draw'>('');

  const deal = () => {
    if (playerCards.length > 0) return;
    var rand1 = randomIntFromInterval(0, 51);
    var rand2 = randomIntFromInterval(0, 51);

    var arr1 = [initialDeck[rand1], initialDeck[rand2]];

    setPlayerCards(arr1);

    if (dealerCards.length > 0) return;
    var rand3 = randomIntFromInterval(0, 51);
    var rand4 = randomIntFromInterval(0, 51);

    var arr2 = [initialDeck[rand3], initialDeck[rand4]];

    setDealerCards(arr2);

    setGameState(GameState.FirstCardsDealt);
  };

  const hit = async () => {
    if (
      gameState >= GameState.FirstCardsDealt ||
      gameState < GameState.PlayerStands
    ) {
      await delay(50);
      var rand = randomIntFromInterval(0, 51);
      var randCard = initialDeck[rand];
      setPlayerCards((prev) => [...prev, randCard]);
      setGameState(GameState.PlayerHits);
    }
  };

  const stand = async () => {
    setGameState(GameState.PlayerStands);
    setDealerCardsHidden(false);
    await delay(100);

    if (playerScore > 21) return;

    var rand = randomIntFromInterval(0, 51);
    var randCard = initialDeck[rand];
    setDealerCards((prev) => [...prev, randCard]);
  };

  const reset = () => {
    setGameState(GameState.NotStarted);
    setWinner('');

    setPlayerCards([]);
    setPlayerScore(0);

    setDealerCards([]);
    setDealerScore(0);
    setDealerCardsHidden(true);
  };

  const calculateWinner = () => {
    if (playerScore === dealerScore) {
      setGameState(GameState.Draw);
      setWinner('draw');
    } else if (
      playerScore === 21 ||
      (playerScore > dealerScore && playerScore <= 21) ||
      (playerScore < 21 && dealerScore > 21)
    ) {
      setGameState(GameState.PlayerWin);
      setWinner('player');
    } else {
      setGameState(GameState.DealerWin);
      setWinner('dealer');
    }
  };

  useEffect(() => {
    setPlayerScore(getScore(playerCards));
    if (dealerCardsHidden) setDealerScore(getScore(dealerCards.slice(0, 1)));
    else setDealerScore(getScore(dealerCards));
  }, [playerCards, dealerCards, dealerCardsHidden]);

  useEffect(() => {
    if (playerScore > 21) {
      stand();
      calculateWinner();
    }

    if (gameState === GameState.PlayerStands) {
      calculateWinner();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, playerScore]);

  return (
    <>
      <div className="container">
        <h1>Blackjack</h1>
        <small>Work In Progress!</small>
        <div className="buttons">
          <Button
            onClick={deal}
            disabled={!(gameState === GameState.NotStarted)}
          >
            Deal
          </Button>
          <Button
            onClick={reset}
            disabled={!(gameState >= GameState.FirstCardsDealt)}
          >
            Reset
          </Button>
          <Button
            onClick={hit}
            disabled={
              gameState < GameState.FirstCardsDealt ||
              gameState > GameState.PlayerStands
            }
          >
            Hit
          </Button>
          <Button
            onClick={stand}
            disabled={
              gameState < GameState.FirstCardsDealt ||
              gameState >= GameState.PlayerWin
            }
          >
            Stand
          </Button>
        </div>

        <div className="scores">
          <>
            {winner !== '' ? (
              <>
                <span> Winner: {winner}</span>
                <br />
                <br />
              </>
            ) : null}
          </>

          {gameState >= GameState.FirstCardsDealt ? (
            <>
              Player Score: <span>{playerScore}</span>
              <br />
              Dealer Score: <span>{dealerScore}</span>
            </>
          ) : null}
        </div>

        {playerCards.length > 0 ? 'Player' : null}
        <div className="cards">
          {playerCards.length > 0
            ? playerCards.map((card, index) => (
                <Card card={card} key={index} hidden={false} />
              ))
            : null}
        </div>

        <br />

        {dealerCards.length > 0 ? 'Dealer' : null}
        <div className="cards">
          {dealerCards.length > 0
            ? dealerCards.map((card, index) => (
                <Card
                  card={card}
                  key={index}
                  hidden={index === 0 ? false : dealerCardsHidden}
                />
              ))
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
