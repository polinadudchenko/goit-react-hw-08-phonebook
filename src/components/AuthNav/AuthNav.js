import { NavLink } from 'react-router-dom';

export default function AuthNav() {

  return (<ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registartion</NavLink>
          </li>
        </ul>
          
  );
}

