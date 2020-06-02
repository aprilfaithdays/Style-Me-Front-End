import React, { useContext, useState } from 'react'
import { OutfitsContext, CurrentUserContext } from '../Containers/Store'

const CreateOutfitForm = props => {
    const [currentUser] = useContext(CurrentUserContext)
    const [outfits, setOutfits] = useContext(OutfitsContext)
    const [newName, setNewName] = useState('')
    const [newTop, setNewTop] = useState('')
    const [newBottom, setNewBottom] = useState('')
    const [newShoe, setNewShoe] = useState('')

    const handleCreateOutfit = e => {
        e.preventDefault()
        const user_id = currentUser
        const name = newName
        const top_id = parseInt(newTop, 0)
        const bottom_id = parseInt(newBottom, 0)
        const shoe_id = parseInt(newShoe, 0)
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
            props.history.push(`/outfits/${newOutfit.id}`)
        })
    }

    return (
        <div>
            <form>
                <input class="form-control form-control-sm" type="text" placeholder="Outfit Name" onChange={e => setNewName(e.target.value)} value={newName}/>
                <input class="form-control form-control-sm" type="text" placeholder="Tops" onChange={e => setNewTop(e.target.value)} value={newTop}/>
                <input class="form-control form-control-sm" type="text" placeholder="Bottoms" onChange={e => setNewBottom(e.target.value)} value={newBottom} />
                <input class="form-control form-control-sm" type="text" placeholder="Shoes" onChange={e => setNewShoe(e.target.value)} value={newShoe}/>
                <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0" onClick={handleCreateOutfit}>Create Outfit</button>
            </form>
        </div>
    )
}

export default CreateOutfitForm