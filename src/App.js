import React from 'react';
import './App.css';
import './style.css';
import Store from './Containers/Store';
import StyleMe from './Containers/StyleMe';

const App = () => {
  return (
    <>
      <Store>
        <StyleMe />
      </Store>
    </>
  )
}

export default App;
