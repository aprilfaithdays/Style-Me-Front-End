import React from 'react'
import Footer from './Footer'

const Welcome = props =>{
    return(
        <div id="auth-page">
            <div className="header">
                <div className="header-text">
                    Style Me
                </div>
            </div> 
            <div className="content"> 
                <div className="content-text">
                    {props.form}
                </div>
            </div> 
            <div className="footer">
                <div className="footer-text">
                    <Footer/>
                </div>
            </div> 
        </div>
    )
}

export default Welcome
