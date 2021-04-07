// React Modules
import React from 'react';
import {
    Link
} from 'react-router-dom';

// Navbar Component
function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">Bear Help Desk</Link>
            </div>
        </nav>
    )
}

// Export
export default Navbar;