import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { authSelectors } from 'redux/auth';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

const useStyles = makeStyles(() => ({
  container: {
    width: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  header: {
    backgroundColor: "#414141",
  },
  styledAppbar: {
    backgroundColor: "#414141",
    boxShadow: 'none',
    position: 'static',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  styledToolbar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
  },
  styledLogo: {
    fontFamily: "Permanent Marker",
    letterSpacing: '0.04em',
    color: "#FFFEFE",
    textAlign: "left",
  },
}));


export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const { header, styledLogo, styledToolbar, styledAppbar, container } = useStyles();

  const logo = (
    <Typography variant="h2" component="h1" className={styledLogo}>
      Phonebook
    </Typography>
  );

  const displayDesktop = () => {
    return <Toolbar className={styledToolbar}>
      {logo}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>;
  };

  
  return (
    <>
      <div className={header}>
        <div className={container}>
        <AppBar className={styledAppbar}>{displayDesktop()}</AppBar>
      </div>
      </div>
      <div className={container}>
      <Outlet />
      <ToastContainer autoClose={3000} />
      </div>
    </>  
  );
}

