import { NavLink, Outlet } from 'react-router-dom';

export default function HeaderLayout() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="link_nav">
          users
        </NavLink>
        &#9752;
        <NavLink to="/todo" className="link_nav">
          to-do
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
