import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Certifique-se de que o componente App está definido em src/App.jsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Certifique-se de que existe um elemento com id 'root' no seu index.html
);