import React, { useContext } from 'react'
import { OutfitsContext } from '../Containers/Store'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateOutfitForm = () => {
    const [, setOutfits] = useContext(OutfitsContext)

    return (
        <div>
            <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Small text" /><br/>
                <Form.Control size="sm" type="text" placeholder="Small text" /><br/>
                <Form.Control size="sm" type="text" placeholder="Small text" /><br/>
                <Button variant="outline-secondary" size='sm'>Create Outfit</Button>
            </Form.Group>
        </div>
    )
}

export default CreateOutfitForm