import { baseDate, colors, Item, Range, ColorsType } from '~/models';

export const range = (n: number, fn: (n: number) => Item) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

export const chooseRandomly = (items: ColorsType[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const addDays = (date: Date, amount: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const formatDate = (date: Date) => date.toISOString().split('T')[0];


export const rangeItems: Item[] = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(colors),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};


export const transform = (items: Item[]): Range[] =>
  items.map(({ date, color }: Item, index): Range =>
    ({ color, start: date, end: items[index + 1]?.date })); // not clear what should be 'start' and 'end' date
