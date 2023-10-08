import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header className="container mt-4">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="movies"
        >
          Movies
        </NavLink>
      </header>
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
};
