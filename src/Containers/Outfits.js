import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { OutfitsContext } from './Store';
import OutfitsCollection from '../Components/OutfitsCollection';
import OutfitDetails from '../Components/OutfitDetails';
import CreateOutfit from '../Containers/CreateOutfit';

const Outfits = () => {
    const [, setOutfits] = useContext(OutfitsContext)

    useEffect(() => {
        fetch('http://localhost:3000/outfits')
        .then(res => res.json())
        .then(res => setOutfits(res))
        // eslint-disable-next-line
    },[])

    return(
        <div>
            <Switch>
                <Route path='/outfits/new' component={CreateOutfit} />
                <Route path='/outfits/:id' component={OutfitDetails} />
                <Route path='/outfits' component={OutfitsCollection} />
            </Switch>
        </div>
    )
}

export default Outfits