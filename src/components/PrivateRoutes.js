import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />
}