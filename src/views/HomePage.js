import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  homeTitle: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    width: '600px',
    color: '#414141',

  }
}));
export function HomePage() {
  
  const { homeTitle } = useStyles();
  return <h3 className={homeTitle}>Hi, here you can create your own contact book. For a start, please log in or register</h3>;

}