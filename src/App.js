import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Containers/Store';
import StyleMe from './Containers/StyleMe';

const App = () => {
  return (
    <>
      <Router>
        <Store>
          <StyleMe />
        </Store>
      </Router>
    </>
  )
}

export default App;
