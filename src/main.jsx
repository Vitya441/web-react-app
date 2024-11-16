import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <App />  
    </Provider>



  </React.StrictMode>,
)