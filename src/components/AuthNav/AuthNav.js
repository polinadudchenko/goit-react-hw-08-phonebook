import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const registerData = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Register",
    href: "/register",
  },
];

const useStyles = makeStyles(() => ({
  registerList: {
    listStyle: 'none',
    margin: 0,
    display: 'flex',
    marginLeft: 'auto',
  },
  button: {
    color: "inherit",
    fontSize: '16px',
    fontFamily: 'inherit'
  }
  
}));
export default function AuthNav() {

  const { registerList, button } = useStyles();

  return (<ul className={registerList}>
          {registerData.map(({ label, href }) => {
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

