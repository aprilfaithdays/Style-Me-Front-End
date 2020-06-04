import React, { useState } from 'react';
import { Link} from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const returningUser = () => {
        return(
            <div>
                <h5>Login</h5>
                <form>
                    <input className="form-control form-control-sm" type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username}/>
                    <input className="form-control form-control-sm" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
                    <button className="btn btn-outline-secondary btn-sm">Login</button>
                </form>
                New to this? <span>➤ </span><Link to='/signup'>Sign Up</Link>
            </div>
        )
    }


    return(
        <div>
            {returningUser()}
        </div>
    )
}

export default Login