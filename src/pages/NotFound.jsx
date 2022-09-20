import React from 'react';
import '../styles/NotFound.scss';
const NotFound = () => {
    return (
        <div className="login">
            <div className="form-container" action="/">
                <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo"/>
                <h1 className="title">Page Not Found. Error 404!</h1>
                <p className="subtitle">Please ensure you are looking at the correct resource</p>
                <div className="notfound-image">
                    <img src="./icons/404_error.svg" alt="error-404"/>
                </div>
                <button className="primary-button">Back to Main Page</button>
            </div>
        </div>
    );
};

export default NotFound;