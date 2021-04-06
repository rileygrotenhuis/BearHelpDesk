// React Modules
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// Home Page Module
function HomePage() {
    return (
        <div className="text-center mt-5">
            <div>
                <Link className="btn btn-lg btn-primary" to="/login">Employee Login</Link>
            </div>
            <div className="mt-5">
                <Link className="btn btn-lg btn-primary" to="/submit">Submit Ticket</Link>
            </div>
        </div>
    )
}

// Export
export default HomePage;