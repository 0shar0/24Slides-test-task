import clsx from 'clsx';
import { ButtonType } from '~/models';

interface ButtonProps {
  button: ButtonType;
  isSelected: boolean;
  setSelectedButton: (value: ButtonType) => void;
}

export const Button = ({ button, isSelected, setSelectedButton }: ButtonProps) => {
  const STYLES = 'h-10 px-5 flex items-center justify-center rounded transition-colors';
  const NON_SELECTED_COLOR = 'bg-gray-300';
  const SELECTED_COLOR = 'bg-green-400';

  return (
    <button
      key={button}
      onClick={() => setSelectedButton(button)}
      className={clsx(STYLES, isSelected ? SELECTED_COLOR : NON_SELECTED_COLOR)}
    >
      {button}
    </button>
  );
};
