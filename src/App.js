import React from 'react';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Nav />
        </div>
      </Provider>
    </>
  );
}

export default App;
