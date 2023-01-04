import { ButtonEnum, ColorsEnum } from '~/models/enum';

export type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

export type ColorsType = keyof typeof ColorsEnum;

export type ButtonType = keyof typeof ButtonEnum;
