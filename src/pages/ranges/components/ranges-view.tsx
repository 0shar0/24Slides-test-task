import clsx from 'clsx';
import { ColorClassNameEnum, Range } from '~/models';

export const RangesView = ({ ranges }: { ranges: Range[] }) => (
  <ul className="space-y-4">
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
