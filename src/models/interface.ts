import { ColorsType } from '~/models/type';

export interface Item {
  date: string;
  color: ColorsType;
}

export interface Range {
  start: string;
  end: string;
  color: ColorsType;
}

export interface QuestionOrAnswer {
  question: string;
  answer: string;
}
