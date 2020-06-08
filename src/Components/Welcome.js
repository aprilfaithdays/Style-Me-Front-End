import React from 'react'

const Welcome = props =>{
    return(
        <div id="auth-page">
            <div id="header">
                <div className="header-text">
                    Style Me
                </div>
            </div> 
            <div id="content"> 
                <div className="content-text">
                    {props.form}
                </div>
            </div> 
            <div id="footer">
                <div className="footer-text">
                    <small><em>
                        Designed by: April Escobar <span>•</span>
                        <a href="https://github.com/aprilfaithdays" target="_blank" rel="noopener noreferrer"> Github </a><span>•</span>
                        <a href="https://www.linkedin.com/in/april-escobar/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                    </em></small>
                </div>
            </div> 
        </div>
    )
}

export default Welcome


        // <div id="auth-page">
        //     <h3 className="welcome">Welcome to Style Me!</h3>
        //     <div>
        //         <div className="row">
        //             <div className="col left">
        //                 <div className="center">
        //                     {/* <img className="display-gif" src="https://media.giphy.com/media/xT8qBe6CcgWfVfHQZO/source.gif" alt="gif"/> */}
        //                 </div>
        //             </div>
        //             <div className="col right">
        //                 <div className="auth-form">
        //                     {props.form}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>