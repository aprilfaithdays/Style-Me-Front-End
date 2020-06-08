import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './Styling/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Context/Store';
import StyleMe from './Containers/StyleMe';
import CurrentUser from './Context/CurrentUser';

const App = () => {
  return (
    <>
      <Router>
        <Store>
          <CurrentUser>
            <Route to='/' component={StyleMe} />
          </CurrentUser>
        </Store>
      </Router>
    </>
  )
}

export default App;
