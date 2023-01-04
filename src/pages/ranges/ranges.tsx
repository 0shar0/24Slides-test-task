import clsx from 'clsx';
import { ColorClassNameEnum, jsonItems, ranges } from '~/models';
import { RangesView } from './components/ranges-view';
import { dataSample, transform } from '~/utils';

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

      <h3 className="text-xl font-bold row-start-2">Ranges example</h3>
      <RangesView ranges={ranges} />

      <h3 className="text-xl font-bold row-start-2">Ranges implementation</h3>
      <RangesView ranges={transform(jsonItems)} />
    </div>
  );
};
