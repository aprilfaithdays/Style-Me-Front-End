import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FavoritesList from '../Components/FavoritesList';
import CreateOutfitForm from '../Components/CreateOutfitForm';

const CreateOutfit = () => {
    
    const createOutfitPage = props => {
        return (
            <div>
                <h3 className="title">Create an Outfit!</h3>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <CreateOutfitForm {...props}/>
                        </div>
                        <div className='col-sm-8'>
                            <FavoritesList />
                        </div>
                    </div>
            </div>
        )
    }

    return(
        <div>
            <Switch>
                <Route path="/outfits/new" component={createOutfitPage}/>
            </Switch>
        </div>
    )
}

export default CreateOutfit