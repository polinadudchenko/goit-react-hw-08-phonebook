import { Outlet, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Layout(fetchContacts) {

  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registartion</NavLink>
          </li>
              </ul>
              <h1>Phonebook</h1>
      </header>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
}

