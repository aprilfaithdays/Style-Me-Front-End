import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                <Link to ='/' className="navbar-brand">Style Me</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/myFavorites' className="nav-link">Favorites</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Browse
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/outfits' className="dropdown-item">Outfits</Link> 
                                <Link to='/tops' className="dropdown-item">Tops</Link> 
                                <Link to='/bottoms' className="dropdown-item">Bottoms</Link> 
                                <Link to='/shoes' className="dropdown-item">Shoes</Link> 
                                <div className="dropdown-divider"></div>
                                <Link to ='/outfits/new' className="dropdown-item">Create Outfit</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



