import React, {useContext} from 'react'
import { CurrentUserContext } from './Store'
import AccessStyleMe from './AccessStyleMe'
import Auth from './Auth'

const StyleMe = props => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)

    return(
        <div>
            {localStorage.id && setCurrentUser(parseInt(localStorage.id, 0))}
            {currentUser !== '' ? <AccessStyleMe {...props} /> : <Auth />}
        </div>
    )
}

export default StyleMe