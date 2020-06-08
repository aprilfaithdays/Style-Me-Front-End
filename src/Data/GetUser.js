import React, { useContext } from 'react'
import { CurrentUserContext } from '../Context/CurrentUser'

const GetUser = props => {
    const [, setCurrentUser] = useContext(CurrentUserContext)

    const user = async () => {
        await fetch(`http://localhost:3000/users/${props.id}`)
        .then(res => res.json())
        .then(res => setCurrentUser(res))
    }

    return(
        <div>
            {user()}
        </div>
    )
}

export default GetUser 