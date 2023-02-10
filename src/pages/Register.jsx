import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// hooks
import { useRegister } from '../components/user/use-register';

// style
import './UserForm.css';

const Register = () => {
  const { register, error } = useRegister();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    register(userData.email, userData.password);
  };

  return (
    <div className='register'>
      <h2>Register</h2>
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
        <button className='form-btn'>Register</button>
      </form>
      <p className='msg'>
        <NavLink to='/login'>Login here</NavLink>
      </p>
      {error && <p className='error'>*{error}</p>}
    </div>
  );
};

export default Register;
