import React, {useState} from 'react';
import './register.css'

const Register = () => {
    return (
        <>
            <div className="register-modal">
                <div className="title-join">Join</div>
                <form className="form-login">
                    <div className="username-input">
                        <div className="username-tag">
                            Username
                        </div>
                        <input type="text" placeholder="type your username..." className="username-input-form  mb-3"/>
                    </div>
                    <div className="password-input">
                        <div className="password-tag">
                            Email
                        </div>
                        <input type="text" className="password-input-form mb-3" placeholder="type your email..."/>
                    </div>
                    <div className="password-input">
                        <div className="password-tag">
                            Password
                        </div>
                        <input type="password" className="password-input-form mb-3" placeholder="type your password..."/>
                    </div>
                    <div className="password-input">
                        <div className="password-tag">
                            Identitiy Number
                        </div>
                        <input type="text" className="password-input-form mb-3" placeholder="type your identity number..."/>
                    </div>
                    <div className="password-input">
                        <div className="password-tag">
                            Address
                        </div>
                        <input type="text" className="password-input-form mb-3" placeholder="type address here..."/>
                    </div>
                    <div className="style-but">
                        <div className="join-button">
                            Join
                            <svg className="arrow" width="35" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.92869 1.33959L9.9692 0.322876C10.4098 -0.107625 11.1222 -0.107625 11.5581 0.322876L20.6696 9.22143C21.1101 9.65194 21.1101 10.3481 20.6696 10.774L11.5581 19.6771C11.1175 20.1076 10.4051 20.1076 9.9692 19.6771L8.92869 18.6604C8.48343 18.2253 8.4928 17.5155 8.94744 17.0895L14.5952 11.8319H1.12487C0.501507 11.8319 0 11.3419 0 10.7328V9.26723C0 8.65812 0.501507 8.16808 1.12487 8.16808H14.5952L8.94744 2.91046C8.48812 2.48454 8.47874 1.77467 8.92869 1.33959Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register