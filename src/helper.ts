export type CardType = {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: number | 'J' | 'Q' | 'K' | 'A';
  color: 'red' | 'blue';
};

export const cards: CardType[] = [
  {
    suit: 'hearts',
    value: 2,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 3,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 4,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 5,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 6,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 7,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 8,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 9,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 10,
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 'J',
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 'Q',
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 'K',
    color: 'red',
  },
  {
    suit: 'hearts',
    value: 'A',
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 2,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 3,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 4,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 5,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 6,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 7,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 8,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 9,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 10,
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 'J',
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 'Q',
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 'K',
    color: 'red',
  },
  {
    suit: 'diamonds',
    value: 'A',
    color: 'red',
  },
  {
    suit: 'clubs',
    value: 2,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 3,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 4,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 5,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 6,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 7,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 8,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 9,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 10,
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 'J',
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 'Q',
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 'K',
    color: 'blue',
  },
  {
    suit: 'clubs',
    value: 'A',
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 2,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 3,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 4,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 5,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 6,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 7,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 8,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 9,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 10,
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 'J',
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 'Q',
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 'K',
    color: 'blue',
  },
  {
    suit: 'spades',
    value: 'A',
    color: 'blue',
  },
];
export enum GameState {
  NotStarted,
  FirstCardsDealt,
  PlayerHits,
  PlayerStands,
  PlayerWin,
  DealerWin,
  Draw,
}
export const shuffleDeck = (deck: CardType[]): CardType[] => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

export function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getCardValue(value: number | 'J' | 'Q' | 'K' | 'A'): number {
  let val = 0;
  if (value === 'J' || value === 'Q' || value === 'K' || value === 'A') {
    val = 10;
  } else if (typeof value === 'number') {
    val = value;
  }
  return val;
}

export function getScore(cards: CardType[]): number {
  var sum = cards.reduce((acc, card) => acc + getCardValue(card.value), 0);
  return sum;
}

export function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
