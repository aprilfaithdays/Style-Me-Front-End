import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <Link to ='/'>Home</Link>{' | '}
            <Link to ='/outfits'>Outfits</Link> {' | '}
            <Link to ='/tops'>Tops</Link> {' | '}
            <Link to ='/bottoms'>Bottoms</Link> {' | '}
            <Link to ='/shoes'>Shoes</Link> {' | '}
            <Link to ='/outfits/new'>Create Outfit</Link> {' | '}
            <Link to ='/myFavorites'>Favorites</Link> {' | '}
        </div>
    )
}

export default Navbar