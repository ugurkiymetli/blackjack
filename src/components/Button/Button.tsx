import './Button.css';

export interface IButtonProps {
  disabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function Button(props: IButtonProps) {
  const { disabled, onClick } = props;
  return (
    <button className="game-button" disabled={disabled} onClick={onClick}>
      {props.children}
    </button>
  );
}
