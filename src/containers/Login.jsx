import React from 'react';
import '../styles/Login.scss';

const login = () => {
    return (
        <div className="login">
            <div classNameName="form-container">
                <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo"/>
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your account</p>
            
                <form className="form" action="/">
                    <label className="label" for="new-password">Password</label>
                    <input id="password" className="input input-password" type="password" placeholder="*********"/>
                    <label className="label" for="new-password">Password</label>
                    <input id="password" className="input input-password" type="password" placeholder="*********"/>
                    <input className="primary-button login-button" type="submit" value="Confirm"/>
                </form>
            </div>
        </div>
    );
};

export default login;