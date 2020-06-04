import React from 'react';
import SignUp from '../Components/SignUp';

const Auth = () => {
    return(
        <div>
            <h3 className="title">Welcome to Style Me!</h3>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <img className="display-gif" src="https://media.giphy.com/media/xT8qBe6CcgWfVfHQZO/source.gif" alt="gif"/>
                    </div>
                    <div className='col-sm-4'>
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth