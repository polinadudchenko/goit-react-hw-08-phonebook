import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  userGreet: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  userName: {
    /* textTransform: 'uppercase', */
    fontSize: '16px',
  },
  button: {
    color: 'inherit',
    fontSize: '16px',
    marginLeft: '10px'
  }
  
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const { userGreet, userName, button } = useStyles();

  return (
    <div className={userGreet}>
      <span className={userName}>Welcome, {name}</span>
      <Button onClick={() => dispatch(authOperations.logOut())} className={button}>
        Logout
      </Button>
    </div>
  );
}