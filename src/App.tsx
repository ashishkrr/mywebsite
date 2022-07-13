import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { store } from './redux/reducer/store';
import { Provider } from 'react-redux';

const data = {
  "name": "ashish",
  "roll": "016"
}

store.subscribe(() => console.log(store.getState()))

export const userData = createContext(data)

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
