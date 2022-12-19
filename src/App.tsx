import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { store } from './redux/reducer/store';
import { Provider } from 'react-redux';
import { Landing } from './pages/Landing';

const data = {
  "name": "ashish",
  "roll": "016"
}

store.subscribe(() => console.log(store.getState()))

export const userData = createContext(data)

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
