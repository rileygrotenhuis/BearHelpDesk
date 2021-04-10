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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/dashboard" class="navbar-brand">Bear Help Desk</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/dashboard" class="nav-link" href="#">Dashboard</Link>
                </li>
                <li class="nav-item active">
                    <Link to="/board" class="nav-link" href="#">Board</Link>
                </li>
                <li class="nav-item">
                    <Link to="/profile" class="nav-link" href="#">Profile</Link>
                </li>
                <li class="nav-item">
                    <a className="nav-link" onClick={logout}>Logout</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

// Export
export default Navbar;