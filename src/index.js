import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/main.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// const express = require('express');
// const path = require('path');
// const app = express();

// // app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(__dirname))

// // app.get('/', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.listen(9000);