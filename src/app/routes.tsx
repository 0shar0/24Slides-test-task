import { Route } from '@tanstack/react-location';
import { Annotation, Optimize1, Optimize2, Ranges, Refactor1, Refactor2, Welcome } from '~/pages';

export const routes: Route[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: 'refactor-1',
    element: <Refactor1 />,
  },
  {
    path: 'refactor-2',
    element: <Refactor2 />,
  },
  {
    path: 'optimize-1',
    element: <Optimize1 />,
  },
  {
    path: 'optimize-2',
    element: <Optimize2 />,
  },
  {
    path: 'ranges',
    element: <Ranges />,
  },
  {
    path: 'annotation',
    element: <Annotation />,
  },
];
