import React from 'react';
import FavoritesList from '../Components/FavoritesList';

const CreateOutfit = props => {
    return(
        <div>
            <h3>Create Outfit</h3>
            <FavoritesList {...props} />
        </div>
    )
}

export default CreateOutfit