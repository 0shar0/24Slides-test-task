import { memo } from 'react';

export const ExpensiveComponent = memo(() => {
  const now = performance.now();
  while (performance.now() - now < 100) {
  }
  return <div>Ohh.. so expensive</div>;
});
