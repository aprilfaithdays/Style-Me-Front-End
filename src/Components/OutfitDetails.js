import React from 'react';

const OutfitDetails = props => {

    return(
        <div>
            {console.log(props.match.params.id)}
            OutfitDetails Component {props.match.params.id}
        </div>
    )
}

export default OutfitDetails