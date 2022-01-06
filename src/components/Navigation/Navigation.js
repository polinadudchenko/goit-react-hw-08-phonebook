import { NavLink } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';

const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
];

const useStyles = makeStyles(() => ({
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    marginLeft: '40px',
    display: 'flex',
  },
  button: {
    fontSize: '16px',
    fontFamily: 'inherit',
    color: 'inherit',
  }
  
}));

export default function Navigation() {

  const { navList, button } = useStyles();

  return (<ul className={navList}>
          {navData.map(({ label, href }) => {
            return (
              <li key={label}>
                <Button
                  {...{
                    to: href,
                    component: NavLink,
                  }} className={button}
                >
                  {label}
                </Button>
              </li>
            );
          })}
        </ul>
  );
}

