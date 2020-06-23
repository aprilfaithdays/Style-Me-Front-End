import React, { useContext } from 'react';
import '../Styling/NewHomePage.css'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../Context/CurrentUser';

const NewHomePage = () => {
    const [currentUser] = useContext(CurrentUserContext)

    return(
        <div className="welcome">
            <h4> Hi {currentUser.name}! </h4>
            It looks like you don't have any outfits yet! <br/>
            Why don't we <Link to='/outfits/new'>create</Link> some? <br/>
            Feel free to also <Link to='/outfits'>browse</Link> outfits others have created too!
        </div>
    )
}

export default NewHomePage