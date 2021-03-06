import React, { useContext, useState } from 'react';
import { NewTopContext, NewBottomContext, NewShoeContext } from '../Context/CreateOutfit';
import { OutfitsContext } from '../Context/Outfits';
import { CurrentUserContext } from '../Context/CurrentUser';
import '../Styling/CreateOutfitForm.css';

const CreateOutfitForm = props => {
    const abortController = new AbortController();

    const [currentUser] = useContext(CurrentUserContext);
    const [outfits, setOutfits] = useContext(OutfitsContext);
    const [newName, setNewName] = useState('');
    const [newTop, setNewTop] = useContext(NewTopContext);
    const [newBottom, setNewBottom] = useContext(NewBottomContext);
    const [newShoe, setNewShoe] = useContext(NewShoeContext);

    const [outfitName, setOutfitName] = useState(true);
    const [outfitTop, setOutfitTop] = useState(true);
    const [outfitBottom, setOutfitBottom] = useState(true);
    const [outfitShoe, setOutfitShoe] = useState(true);
    
    const user_id = currentUser.id;
    const name = newName;
    const top_id = parseInt(newTop[1], 0);
    const bottom_id = parseInt(newBottom[1], 0);
    const shoe_id = parseInt(newShoe[1], 0);
    const likes = 0;

    const [showGif, setShowGif] = useState(false);
    const createOutfitGif = require("../icons/createOutfit.gif");
    const buttonStyle = 'btn btn-outline-secondary btn-sm'

    const handleCreateOutfit = e => {
        e.preventDefault()
        fetch('https://boiling-reaches-37131.herokuapp.com/outfits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user_id, name, top_id, bottom_id, shoe_id, likes})
        })
        .then(res => res.json())
        .then(newOutfit => {
            if (newOutfit.errors){
                checkValidation()
            } else {
                setOutfits([...outfits, newOutfit]);
                setNewName('');
                setNewTop('');
                setNewBottom('');
                setNewShoe('');
                props.history.push(`/outfits/${newOutfit.id}`);
            }
        })
        return cleanUp();
    }

    const cleanUp = () => abortController.abort();

    const checkValidation = () => {
        if (name === ''){ setOutfitName(false) };
        if (newTop === ''){ setOutfitTop(false) };
        if (newBottom === ''){ setOutfitBottom(false) };
        if (newShoe === ''){ setOutfitShoe(false) };
    }

    const instructions = () => (
        <div id="instructions"> 
            <div className="instructions">Instructions:</div>
            <p><b> Step 1: </b>Choose from your favorite products on the right:</p>
            <ol>
                <li>Select a top</li>
                <li>Select a bottom</li>
                <li>Select a shoe</li>
            </ol>
            <p><b>Step 2:</b> Name your outfit.</p> 
            <p>
            <small>
                Note: The submit button will only appear once everything has been completed.
            </small>
            </p>
            <div className="submit-button">
                <button className={buttonStyle} onClick={() => setShowGif(!showGif)}>Demo</button>
            </div>
            {showGif &&  <img className="createOutfitGif" src={createOutfitGif} alt="demo"/>}
        </div>
    )

    const renderOption = (product, category) => <img className="select-product" src={product[0]} alt={category}/>

    const selectMessage = category => <small className="error form-text">*Please select a {category}.</small>

    const nameOutfit = () => (
        <div className="outfit-name">
            <input className="create-input" type="text" placeholder="Outfit Name" onChange={e => setNewName(e.target.value)} value={newName}/>
        </div>
    )

    const createOutfit = () => (
        <div className="submit-button">
            <button className={buttonStyle} type="submit">Create Outfit</button>
        </div>
    )

    const outfitComplete = () => newTop[0] && newBottom[0] && newShoe[0]

    return (
        <div>
            {(newTop[0] || newBottom[0] || newShoe[0]) ? null : instructions()}
            <form className="create-outfit" onSubmit={handleCreateOutfit}>
                {/* name */}
                <div className="input-name">
                    {outfitComplete() && nameOutfit()}
                    {outfitName === false && <small className="error form-text">*Please name your outfit.</small>}
                </div>
                {/* submit button */}
                    {outfitComplete() && newName && createOutfit()}
                {/* top options */}
                    {newTop[0] && renderOption(newTop, 'top')}
                    {outfitTop === false && selectMessage('top')}<br/>
                {/* bottom options */}
                    {newBottom[0] && renderOption(newBottom, 'bottom')}
                    {outfitBottom === false && selectMessage('bottom')}<br/>
                {/* shoe options */}
                    {newShoe[0] && renderOption(newShoe, 'shoe')}
                    {outfitShoe === false && selectMessage('shoe')}<br/>
            </form>
        </div>
    )
}

export default CreateOutfitForm