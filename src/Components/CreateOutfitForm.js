import React, { useContext } from 'react'
import { OutfitsContext, CurrentUserContext, NewTopContext, NewBottomContext, NewShoeContext, NewNameContext } from '../Containers/Store'

const CreateOutfitForm = props => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits, setOutfits] = useContext(OutfitsContext)
    const [newName, setNewName] = useContext(NewNameContext)
    const [newTop, setNewTop] = useContext(NewTopContext)
    const [newBottom, setNewBottom] = useContext(NewBottomContext)
    const [newShoe, setNewShoe] = useContext(NewShoeContext)

    const handleCreateOutfit = e => {
        e.preventDefault()
        const user_id = currentUser
        const name = newName
        const top_id = parseInt(newTop[1], 0)
        const bottom_id = parseInt(newBottom[1], 0)
        const shoe_id = parseInt(newShoe[1], 0)
        const likes = 0

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
            setOutfits([...outfits, newOutfit]);
            setNewName('');
            setNewTop('');
            setNewBottom('');
            setNewShoe('');
            props.history.push(`/outfits/${newOutfit.id}`);
        })
    }

    return (
        <div>
            <form>
                <input className="form-control form-control-sm" type="text" placeholder="Outfit Name" onChange={e => setNewName(e.target.value)} value={newName}/>
                <img src={newTop[0]} alt="top"/>
                <img src={newBottom[0]} alt="bottom"/>
                <img src={newShoe[0]} alt="shoe"/>
                <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0" onClick={handleCreateOutfit}>Create Outfit</button>
            </form>
            {console.log(newName)}
        </div>
    )
}

export default CreateOutfitForm