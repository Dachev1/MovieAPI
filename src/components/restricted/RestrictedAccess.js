import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestrictedAccess.css';

const RestrictedAccess = () => {
    const navigate = useNavigate();

    return (
        <div className="restricted-access-container">
            <div className="restricted-access-card">
                <h1>Restricted Access</h1>
                <p>
                    You need to log in to view this page. If you don’t have an account, please
                    register to access this content.
                </p>
                <div className="restricted-access-buttons">
                    <button onClick={() => navigate('/login')} className="btn btn-login">
                        Go to Login
                    </button>
                    <button onClick={() => navigate('/register')} className="btn btn-register">
                        Go to Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestrictedAccess;
