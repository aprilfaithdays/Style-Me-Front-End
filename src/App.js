import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './Styling/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateOutfit from './Context/CreateOutfit';
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
        <CreateOutfit>
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
        </CreateOutfit>
      </Router>
    </>
  )
}

export default App;
