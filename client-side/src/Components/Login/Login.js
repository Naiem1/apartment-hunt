import React, { useState } from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Login = () => {

    const [newUser, setNewUser] = useState(true);

    return (
        <div className='login-container'>
            <div className='row justify-content-center m-4'>
                <div className='login'>
                    <h5>{newUser ? 'Create an account' : 'Login'}</h5>
                    <form action="">
                        {newUser && <>
                            <input type="text" placeholder="First name" required />
                            <input type="text" placeholder="Last name" required /> </>
                        }
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder="Password" required /><br/>
                        {!newUser && <span>Forgot password</span>}
                        {newUser && <input type="password" placeholder='Confirm password' required />} <br/>
                        <input type="submit" value={newUser ? 'Create an account' : 'Login'} />
                    </form>
                    <p className='text-center'>
                        {newUser && 'Already have an account?'} 
                        <span onClick={() => setNewUser(!newUser)}>{newUser ? 'Login' : 'Create an account' }</span> 
                    </p>
                </div>
            </div>

            <div className='row justify-content-center m-4'>
                <div>
                    <div className='row social-account'>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="col-auto text-center">
                            <p>Continue with Facebook</p>
                        </div>
                    </div>
                    <div className='row social-account mt-3'>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="col-auto text-center">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;