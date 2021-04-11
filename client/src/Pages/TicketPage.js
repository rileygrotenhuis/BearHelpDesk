// React Modules
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

// Components
import Navbar2 from '../Components/Navbar2';

// Ticket Page
function TicketPage() {

    // useHistory Variable
    let history = useHistory();

    // useParams Variables
    const { ticketID } = useParams();

    // On Page Load
    useEffect(() => {
        // GET => '/login'
        Axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:5000/login'
        }).then(results => {
            // If there is no logged in user detected, redirect to login page
            if (results.data.employee_email == null) {
                alert('You must be logged in to access this page!');
                history.push('/login');
            // Otherwise, carry on...
            } else {
                alert(`You will soon be able to see the info for ${ticketID}`);
            }
        });
    }, []);

    // JSX
    return (
        <div>
            <Navbar2 />
            <div className="container mt-3">
                <h1 className="mb-3">Ticket Page</h1>
            </div>
        </div>
    );
}

// Export
export default TicketPage;