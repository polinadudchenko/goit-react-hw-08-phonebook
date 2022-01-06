import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { TextField, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  login: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginHeader: {
    marginBottom: '10px',
    color: '#414141'
  },
  form: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    
  },
  textField: {
    marginBottom: '15px'
  },
  btn: {
    alignSelf: 'center',
    width: '100px',
    backgroundColor: '#eaeaea',
    color: '#414141',
  }
}));


export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { form, login, btn, loginHeader, textField } = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={login}>
      <h2 className={loginHeader}>Login</h2>

      <form onSubmit={handleSubmit} className={form} autoComplete="off">
          <TextField
            label='Email'
            type="email"
            name="email"
            value={email}
          className={textField}
            onChange={handleChange}
          />
        
          <TextField
            label='Password'
            type="password"
            name="password"
          value={password}
          className={textField}
            onChange={handleChange}
          />

        <Button type="submit" className={btn}>Get in</Button>
      </form>
    </div>
  );
}
