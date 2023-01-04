import clsx from 'clsx';
import untypedItems from './items.json';
import untypedRanges from './ranges.json';
import { ColorClassNameEnum, dataSample, Item, Range } from './utils';

const jsonItems = untypedItems as Item[];
const ranges = untypedRanges as Range[];

const transform = (items: Item[]): Range[] =>
  items.map(({ date, color }: Item, index): Range =>
    ({ color, start: date, end: items[index + 1]?.date })); // not clear what should be 'start' and 'end' date

const RangesView = ({ ranges }: { ranges: Range[] }) => (
  <ul className='space-y-4'>
    {ranges.map((item) => (
      <li
        key={item.start + item.end}
        className={clsx(
          'h-10 flex items-center justify-between px-5 rounded',
          ColorClassNameEnum[item.color],
        )}
      >
        <span>{item.start}</span>
        <span>{item.end}</span>
      </li>
    ))}
  </ul>
);

export const Ranges = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 grid grid-cols-3 gap-8">
      <div className="col-span-3">
        <h2 className="text-2xl mb-4">Convert adjacent items of same type into ranges</h2>
        <p>The data of individual item should look like this: </p>
        <pre>{JSON.stringify(dataSample, null, 2)}</pre>
      </div>

      <h3 className="text-xl font-bold row-start-2">Discretes</h3>
      <ul className="space-y-4">
        {jsonItems.map((item) => (
          <li
            key={item.date}
            className={clsx('h-10 flex items-center px-5 rounded', ColorClassNameEnum[item.color])}
          >
            {item.date}
          </li>
        ))}
      </ul>

      <h3 className='text-xl font-bold row-start-2'>Ranges example</h3>
      <RangesView ranges={ranges} />

      <h3 className='text-xl font-bold row-start-2'>Ranges implementation</h3>
      <RangesView ranges={transform(jsonItems)} />
    </div>
  );
};
