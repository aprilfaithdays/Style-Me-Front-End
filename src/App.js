import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './Styling/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Context/Store';
import StyleMe from './Containers/StyleMe';
import CurrentUser from './Context/CurrentUser';
import Outfits from './Context/Outfits';
import Tops from './Context/Tops';

const App = () => {
  return (
    <>
      <Router>
        <Store>
        <Outfits>
        <Tops>
          <CurrentUser>
            <Route to='/' component={StyleMe} />
          </CurrentUser>
        </Tops>
        </Outfits>
        </Store>
      </Router>
    </>
  )
}

export default App;
