import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, setRole, updateUser } from '../store/authSlice';
function Login() {
    // мб хранить данные из регистрации
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function validateLogin() {
      const newErrors = {};
      if (!email) {
        newErrors.email = 'Incorrect email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid';
    }
      if (!password) {
        newErrors.password = "Incorrect password";
      }
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateLogin()) {
          try {
              const response = await axios.post('http://localhost:3000/login', {email, password});
              console.log('Login successfully: ', response.data.user);

              const userId = response.data.user.id;
              const userResponse = await axios.get('http://localhost:3000/users/' + userId);
              const newUser = userResponse.data;
              console.log("пользователь: ",  newUser);
              dispatch(updateUser(userResponse.data));
              dispatch(login(newUser))
              navigate('/home');

          } catch (error) {
              console.error('Login failed:', error.response.data);
          }
          setErrors({});
        }
    }




    return (
        
      <div className="container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
  <h1 className="text-center mb-4">Авторизоваться</h1>
  <form onSubmit={handleLogin}>
    <div className="form-outline mb-4">
      <input
        type="email"
        id="form2Example1"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="form-label" htmlFor="form2Example1">Email</label>
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
    </div>

    <div className="form-outline mb-4">
      <input
        type="password"
        id="form2Example2"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="form-label" htmlFor="form2Example2">Password</label>
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
    </div>

    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="form2Example31"
            checked
          />
          <label className="form-check-label" htmlFor="form2Example31">Запомнить меня</label>
        </div>
      </div>

      <div className="col text-end">
        <a href="#!">Забыли пароль?</a>
      </div>
    </div>

    <button type="submit" className="btn btn-primary btn-block mb-4">Войти</button>

    <div className="text-center">
      <p>Еще не зарегистрированы?  <Link to={"/registration"}>Зарегистрироваться</Link> </p>
      <p>или войдите с помощью:</p>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
    </div>
  </form>
</div>





      //   <div className='registration-container'>
      //   <h1>Авторизоваться</h1>
      //   <form onSubmit={handleLogin}>
      //     <div>
      //       <label>
      //         Email
      //         <input
      //          type='text'
      //          value={email} 
      //          onChange={(e) => setEmail(e.target.value)}
      //          />
      //          {errors.email &&
      //                   <div style={{color: "red"}}>{errors.email}</div>
      //           }
      //       </label>
      //     </div>

      //     <div>
      //       <label>
      //         Password
      //         <input
      //          type='text'
      //          value={password} 
      //          onChange={(e) => setPassword(e.target.value)}
      //          />
      //          {errors.password &&
      //                   <div style={{color: "red"}}>{errors.password}</div>
      //           }
      //       </label>
      //     </div>

          
      //     <button type='submit'>Войти</button>

      //   </form>
      // </div>


    );
    
    
    
    
}

export default Login;