import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './app';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// export default function App() {
//   return <button className="square">X</button>;
// }

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
