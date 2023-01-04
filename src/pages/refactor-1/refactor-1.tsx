import clsx from 'clsx';
import { useState } from 'react';
import { CenteredLayout } from '~/components';

enum ButtonEnum {
  fast = 'fast',
  quality = 'quality',
  cheap = 'cheap'
}

type ButtonType = keyof typeof ButtonEnum

const buttons: ButtonType[] = [ButtonEnum.fast, ButtonEnum.quality, ButtonEnum.cheap];

interface ButtonProps {
  button: ButtonType;
  isSelected: boolean;
  setSelectedButton: (value: ButtonType) => void;
}

const Button = ({ button, isSelected, setSelectedButton }: ButtonProps) => {

  const STYLES = 'h-10 px-5 flex items-center justify-center rounded transition-colors';
  const NON_SELECTED_COLOR = 'bg-gray-300';
  const SELECTED_COLOR = 'bg-green-400';

  return (
    <button
      key={button}
      onClick={() => setSelectedButton(button)}
      className={clsx(
        STYLES,
        isSelected ? SELECTED_COLOR : NON_SELECTED_COLOR,
      )}
    >
      {button}
    </button>
  );
};

export const Refactor1 = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((button) => (
          <Button
            key={button}
            button={button}
            isSelected={button === selectedButton}
            setSelectedButton={setSelectedButton}
          />
        ))}
      </div>
    </CenteredLayout>
  );
};
