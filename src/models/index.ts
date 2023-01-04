export * from './type';
export * from './interface';
export * from './enum';
export * from './constants';

import { Item, Range } from '~/models/interface';
import untypedItems from './items.json';
import untypedRanges from './ranges.json';

export const jsonItems = untypedItems as Item[];
export const ranges = untypedRanges as Range[];
