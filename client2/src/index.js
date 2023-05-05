import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/userStore"
import SportStore from "./store/sportStore"

export const Context = createContext()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value ={{
        user: new UserStore(),
        sport: new SportStore()
    }}>
    <App />
    </Context.Provider>
);


