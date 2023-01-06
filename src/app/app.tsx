import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { routes } from '~/app/routes';
import { Header } from '~/components';

const reactLocation = new ReactLocation();

export const App = () => (
  <Router location={reactLocation} routes={routes}>
    <Header />
    <Outlet />
  </Router>
);
