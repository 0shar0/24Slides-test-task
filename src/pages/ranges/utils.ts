import { addDays, chooseRandomly, formatDate, range } from '~/utils';

const baseDate = new Date('2022-01-01');

enum ColorsEnum {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export type ColorsType = keyof typeof ColorsEnum;
const colors: ColorsType[] = [ColorsEnum.red, ColorsEnum.green, ColorsEnum.blue];

export const rangeItems: Item[] = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(colors),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};

export interface Item {
  date: string;
  color: ColorsType;
}

export interface Range {
  start: string;
  end: string;
  color: ColorsType;
}

export enum ColorClassNameEnum {
  red = 'bg-red-300 text-red-900',
  green = 'bg-green-300 text-green-900',
  blue = 'bg-blue-300 text-blue-900',
}
