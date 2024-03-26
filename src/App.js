
import './App.css';
import React from 'react';
import Navigate from './Navigate';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'; 


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
