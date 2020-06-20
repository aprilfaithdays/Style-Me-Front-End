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
import Bottoms from './Context/Bottoms';
import Shoes from './Context/Shoes';
import FaveTops from './Context/FaveTops';
import FaveBottoms from './Context/FaveBottoms';
import FaveShoes from './Context/FaveShoes';

const App = () => {
  return (
    <>
      <Router>
        <Store>
          <Outfits>
            <Tops>
              <Bottoms>
                <Shoes>
                  <FaveTops>
                    <FaveBottoms>
                      <FaveShoes>
                        <CurrentUser>
                          <Route to='/' component={StyleMe} />
                        </CurrentUser>
                      </FaveShoes>
                    </FaveBottoms>
                  </FaveTops>
                </Shoes>
              </Bottoms>
            </Tops>
          </Outfits>
        </Store>
      </Router>
    </>
  )
}

export default App;
