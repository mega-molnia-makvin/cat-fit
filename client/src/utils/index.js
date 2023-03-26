import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userStore from "../store/userStore";
import sportStore from "../store/sportStore";

export const Context = createContext(null)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

ReactDOM.render(
  <Context.Provider value={{
    user: new userStore(),
    sport: new sportStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
