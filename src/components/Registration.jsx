import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './Input';
import '../index2.css';
// Длина пароля ВАЖНО( 400 ошибка)
// Создал SNAPSHOT свой БД (ctrl + s) - и после этого сразу стало сохраняться 
// ADMIN - костыльно изначально прописал при создании пользователя роль ADMIN, потом изменил на USER.
function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const role = "USER";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});


    // username, password, email, age
    const validateForm = () => {
      const newErrors = {};

      if (!username) {
          newErrors.username = 'Username is required';
      }

      if (!email) {
          newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email is invalid';
      }

      if (!age) {
        newErrors.age = "age is required";
      }

      if (!password) {
          newErrors.password = 'Password is required';
      } else if (password.length < 8) {
          newErrors.password = `Password must be at 
          least 8 characters long`;
      }
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };


    const handleRegistration = async (e) => {
      e.preventDefault();
      if (validateForm()) {
          try {
            const response = await axios.post('http://localhost:3000/register', { email, password, username, age, role });
            console.log('Registration successfully: ', response.data);        
            navigate("/login");
            //РЕДИРЕКТ НА LOGIN 
          } catch (error) {
            console.error('Registration failed:', error);
          }
          setErrors({});
      } else {
        console.log(`Form submission failed
             due to validation errors.`);
      }
     
    };
    

    
    return (

<div className="container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
  <h1 className="text-center mb-4">Регистрация</h1>
  <form onSubmit={handleRegistration}>
    <div className="form-outline mb-4">
      <input
        type="text"
        id="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="form-label" htmlFor="email">Email</label>
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
    </div>

    <div className="form-outline mb-4">
      <input
        type="password"
        id="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="form-label" htmlFor="password">Password</label>
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
    </div>

    <div className="form-outline mb-4">
      <input
        type="text"
        id="username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="form-label" htmlFor="username">Username</label>
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
    </div>

    <div className="form-outline mb-4">
      <input
        type="text"
        id="age"
        className="form-control"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label className="form-label" htmlFor="age">Age</label>
      {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
    </div>

    <button type='submit' className="btn btn-primary btn-block mb-4">Зарегистрироваться</button>

    <div className="text-center">
      {/* <p>Уже зарегистрированы? <Link to={"/login"}>Войти</Link> </p> */}
      {/* <p>или зарегистрируйтесь с помощью:</p> */}
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
      

      

      // <div>
      //   <h1>Регистрация</h1>
      //   <form onSubmit={handleRegistration}>
      //     <div>
      //       <label>Email</label>
              
      //         <input
      //          type='text'
      //          value={email} 
      //          onChange={(e) => setEmail(e.target.value)}
      //          />
      //          {errors.email &&
      //                   <div style={{color: "red"}}>{errors.email}</div>
      //                   // <span className="error-message">
      //                   //     {errors.email}
      //                   // </span>
      //           }
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

      //     <div>
      //       <label>
      //         Username
      //         <input
      //          type='text'
      //          value={username} 
      //          onChange={(e) => setUsername(e.target.value)}
      //          />
      //           {errors.username &&
      //                   <div style={{color: "red"}}>{errors.username}</div>
      //           }
      //       </label>
      //     </div>

      //     <div>
      //       <label>
      //         Age
      //         <input
      //          type='text'
      //          value={age} 
      //          onChange={(e) => setAge(e.target.value)}
      //          />
      //          {errors.age &&
      //                   <div style={{color: "red"}}>{errors.age}</div>
      //           }
      //       </label>
      //     </div>

      //     <button type='submit'>Зарегистрироваться</button>

      //   </form>
      // </div>





        // <div>
            
        //     <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        //     <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        //     <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        //     <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        //     <button onClick={handleRegister}>Register</button> 


        // </div>
    );

}

export default Registration;
