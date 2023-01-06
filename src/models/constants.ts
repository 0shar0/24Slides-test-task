import { ButtonEnum, ColorsEnum } from '~/models/enum';
import { QuestionOrAnswer } from '~/models/interface';
import { ButtonType, ColorsType, TodoItem } from '~/models/type';

export const baseDate = new Date('2022-01-01');

export const colors: ColorsType[] = [ColorsEnum.red, ColorsEnum.green, ColorsEnum.blue];
export const buttons: ButtonType[] = [ButtonEnum.fast, ButtonEnum.quality, ButtonEnum.cheap];
export const QnA: QuestionOrAnswer[] = [
  { question: 'Do you run like a fish?', answer: 'Absolutely man' },
  { question: 'Have you tried to swim like a dinosaur?', answer: 'Nah, not my cup of tea' },
  { question: 'How are we counting from 5 to 10?', answer: 'Do I look like a counter?' },
];
export const todosData: TodoItem[] = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];
