import { ButtonEnum, ColorsEnum } from '~/models/enum';

export type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

export type ColorsType = keyof typeof ColorsEnum;

export type ButtonType = keyof typeof ButtonEnum;

export type CoordinatesType = {
  y: number;
  x: number;
};

export type CommentType = {
  x: number;
  y: number;
  id: number;
  value: string;
};

export type CommentControllerParameterType = {
  comment?: CommentType;
  id?: number;
};
