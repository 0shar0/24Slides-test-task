import { NavItem } from '~/components/index';

export const Header = () => (
  <header className="sticky top-0 w-full">
    <nav className="bg-gray-600 shadow-lg">
      <ul className="flex items-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/refactor-1">Refactor 1</NavItem>
        <NavItem to="/refactor-2">Refactor 2</NavItem>
        <NavItem to="/optimize-1">Optimize 1</NavItem>
        <NavItem to="/optimize-2">Optimize 2</NavItem>
        <NavItem to="/ranges">Ranges</NavItem>
      </ul>
    </nav>
  </header>
);
