import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { TextField, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  register: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  registerHeader: {
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


export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { form, register, btn, registerHeader, textField } = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={register}>
      <h1 className={registerHeader}>Register now</h1>

      <form onSubmit={handleSubmit} className={form} autoComplete="off">
          <TextField
            label='Name' type="text" name="name" value={name} className={textField} onChange={handleChange} />

        
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

        <Button type="submit" className={btn}>Register</Button>
      </form>
    </div>
  );
}