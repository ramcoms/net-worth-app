import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// hooks
import { useLogin } from '../components/user/use-login';

// style
import './UserForm.css';

const Login = () => {
  const { login, error } = useLogin();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    login(userData.email, userData.password);
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input
            required
            type='email'
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            required
            type='password'
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button className='form-btn'>Login</button>
      </form>
      <p className='msg'>
        <NavLink to='/register'>Register here</NavLink>
      </p>
      {error && <p className='error'>*{error}</p>}
    </div>
  );
};

export default Login;
