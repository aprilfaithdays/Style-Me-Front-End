import React, { useState, useContext } from 'react';
import { OutfitsContext } from '../Context/Store';
import '../Styling/OutfitPage.css'

const UpdateOutfit = props => {
    const id = props.id
    const url = `http://localhost:3000/outfits/${id}`
    const [outfits, setOutfits] = useContext(OutfitsContext)
    const [name, setName] = useState(props.name)

    const handleSave = e => {
        e.preventDefault()
        fetch(url, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name
            })
        })
        .then(res => res.json())
        .then(res => {
            props.setInfo(res);
            updateList(res);
        })
    }

    const updateList = res => {
        const list = [...outfits]
        const updated = list.map(outfit => outfit.id === id ? res : outfit)
        setOutfits(updated)
    }

    return(
        <div className="outfit-detail">
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSave}>
                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button className="btn btn-outline-secondary btn-sm" type="submit">Save</button>
            </form>
        </div>
    )
}

export default UpdateOutfit