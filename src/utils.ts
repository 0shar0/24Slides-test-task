import { ColorsType, Item } from '~/pages/ranges/utils';

export const useRenderHighlight = (className: string, current: HTMLLIElement | null) => {
  if (current) {
    current.classList.add(className);
    setTimeout(() => {
      current.classList.remove(className);
    }, 200);
  }
};

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
