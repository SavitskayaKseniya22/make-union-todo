import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="link_nav">
          users
        </NavLink>
        &#9752;
        <NavLink to="/to-do" className="link_nav">
          ToDo
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
