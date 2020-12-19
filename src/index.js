import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './Create';
import Single from './Single';
import Edit from './Edit';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App}/>
      <Route exact path="/new" component={Create}/>
      <Route exact path="/single/:id" component={Single}/>
      <Route exact path="/edit/:id" component={Edit}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
