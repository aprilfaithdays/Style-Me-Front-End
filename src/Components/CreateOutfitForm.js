import React, { useContext, useState } from 'react'
import { OutfitsContext, NewTopContext, NewBottomContext, NewShoeContext } from '../Context/Store';
import { CurrentUserContext } from '../Context/CurrentUser';
import '../Styling/CreateOutfitForm.css'

const CreateOutfitForm = props => {
    const abortController = new AbortController()

    const [currentUser] = useContext(CurrentUserContext)
    const [outfits, setOutfits] = useContext(OutfitsContext)
    const [newName, setNewName] = useState('')
    const [newTop, setNewTop] = useContext(NewTopContext)
    const [newBottom, setNewBottom] = useContext(NewBottomContext)
    const [newShoe, setNewShoe] = useContext(NewShoeContext)

    const [outfitName, setOutfitName] = useState(true)
    const [outfitTop, setOutfitTop] = useState(true)
    const [outfitBottom, setOutfitBottom] = useState(true)
    const [outfitShoe, setOutfitShoe] = useState(true)
    
    const user_id = currentUser.id
    const name = newName
    const top_id = parseInt(newTop[1], 0)
    const bottom_id = parseInt(newBottom[1], 0)
    const shoe_id = parseInt(newShoe[1], 0)
    const likes = 0

    const handleCreateOutfit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/outfits', {
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
    }

    const cleanUp = () => abortController.abort()

    const checkValidation = () => {
        if (name === ''){
            setOutfitName(false)
        }
        if (newTop === ''){
            setOutfitTop(false)
        }
        if (newBottom === ''){
            setOutfitBottom(false)
        }
        if (newShoe === ''){
            setOutfitShoe(false)
        }
    }

    const instructions = () => (
        <em> 
            Create an outfit by selecting from your favorite products on the the right. <br/><br/>
            Don't forget to give your outfit a name and select a season(s) you'd wear it.
        </em>
    )

    const renderOption = (product, category) => (
        <img className="select-product" src={product[0]} alt={category}/>
    )

    const selectMessage = category => (
        <small className="error form-text">*Please select a {category}.</small>
    )

    const nameOutfit = () => (
        <div className="outfit-name">
            <input className="form-control form-control-sm" type="text" placeholder="Outfit Name" onChange={e => setNewName(e.target.value)} value={newName}/>
        </div>
    )

    const createOutfit = () => (
        <div className="submit-button">
            <button className="btn btn-outline-secondary btn-sm" type="submit">Create Outfit</button>
        </div>
    )

    return (
        <div>
            {(newTop[0] || newBottom[0] || newShoe[0]) ? null : instructions()}
            <form className="create-outfit" onSubmit={handleCreateOutfit}>
                {/* name */}
                    {newTop[0] && newBottom[0] && newShoe[0] && nameOutfit()}
                    {outfitName === false && <small className="error form-text">*Please name your outfit.</small>}
                {/* submit button */}
                    {newName && newTop[0] && newBottom[0] && newShoe[0] && createOutfit()}
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
            {cleanUp()}
        </div>
    )
}

export default CreateOutfitForm