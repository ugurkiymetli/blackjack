import * as React from 'react';
import { CardType } from '../../helper';
import './Card.css';
import {
  BsFillSuitSpadeFill,
  BsFillSuitHeartFill,
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
} from 'react-icons/bs';

export interface ICardProps {
  card: CardType;
}

export default function Card(props: ICardProps) {
  const { color, value, suit } = props.card;

  function getSuitIcon(): React.ReactNode {
    if (suit === 'clubs') return <BsFillSuitClubFill />;
    if (suit === 'hearts') return <BsFillSuitHeartFill />;
    if (suit === 'spades') return <BsFillSuitSpadeFill />;
    if (suit === 'diamonds') return <BsFillSuitDiamondFill />;
  }

  return (
    <div className="card">
      <div className={`card-${color}`}>
        <span className="card-value">{value}</span>
        <br />
        <span className="card-suit">{getSuitIcon()}</span>
      </div>
    </div>
  );
}
