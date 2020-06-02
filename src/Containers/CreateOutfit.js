import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FavoritesList from '../Components/FavoritesList';
import CreateOutfitForm from '../Components/CreateOutfitForm';

const CreateOutfit = () => {

    const createOutfitPage = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <CreateOutfitForm />
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