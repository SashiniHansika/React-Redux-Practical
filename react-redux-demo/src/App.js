import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HookSCakeContainer';
import IceCreamCreator from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamCreator />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
