import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';

export default function Layout() {

  return (
    <>
      <header>
        <Navigation/>
        <h1>Phonebook</h1>
        <AuthNav/>
      </header>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
}

