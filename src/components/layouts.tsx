import clsx from 'clsx';
import { ReactNode } from 'react';

export const CenteredLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={clsx(
      'flex flex-col items-center justify-center h-full pb-32 text-slate-700',
      className,
    )}
  >
    {children}
  </div>
);
