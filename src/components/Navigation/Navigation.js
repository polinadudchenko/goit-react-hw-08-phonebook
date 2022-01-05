import { NavLink } from 'react-router-dom';

export default function Navigation() {

  return (<ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
  );
}

