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
  hidden: boolean;
}

export default function Card(props: ICardProps) {
  const { hidden, card } = props;
  const { color, value, suit } = card;
  function getSuitIcon(): React.ReactNode {
    if (suit === 'clubs') return <BsFillSuitClubFill />;
    if (suit === 'hearts') return <BsFillSuitHeartFill />;
    if (suit === 'spades') return <BsFillSuitSpadeFill />;
    if (suit === 'diamonds') return <BsFillSuitDiamondFill />;
  }

  return (
    <div className="card">
      <div className={`card-${color}`}>
        <span className="card-value">{hidden ? '?' : value}</span>
        <br />
        <span className="card-suit">{hidden ? null : getSuitIcon()}</span>
      </div>
    </div>
  );
}
