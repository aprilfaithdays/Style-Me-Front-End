import React, {useContext} from 'react'
import { CurrentUserContext } from './Store'
import AccessStyleMe from './AccessStyleMe'
import Auth from './Auth'

const StyleMe = () => {
    const [currentUser] = useContext(CurrentUserContext)
    return(
        <div>
            {currentUser !== '' ? <AccessStyleMe /> : <Auth />}
        </div>
    )
}

export default StyleMe