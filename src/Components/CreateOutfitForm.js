import React, { useContext } from 'react'
import { OutfitsContext } from '../Containers/Store'

const CreateOutfitForm = () => {
    const [, setOutfits] = useContext(OutfitsContext)

    return (
        <div>
            Hello form!
        </div>
    )
}

export default CreateOutfitForm