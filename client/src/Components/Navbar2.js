// React Modules
import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
    Link
} from 'react-router-dom';

// Navbar Component
function Navbar() {

    // useHistory Variable
    let history = useHistory();

    // This function logs an authenticated user out
    const logout = () => {
        // DELETE => '/logout'
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: 'http://localhost:5000/logout'
        }).then(results => {
            // Alert the user and redirect to Home Page
            alert('Successfully Logged Out!');
            history.push('/');
        }).catch(function(error) {
            alert('An error occured');
            history.push('/');
        });
    }

    // JSX
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{"background": "#121212", "borderBottom": "1px solid white"}}>
            <div className="container-fluid">
                <Link to="/dashboard" className="navbar-brand">Bear Help Desk</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/board" className="nav-link">Board</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" onClick={logout}>Logout</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export
export default Navbar;