import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <>
      <header>
        <Navigation/>
        <h1>Phonebook</h1>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </header>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
}

