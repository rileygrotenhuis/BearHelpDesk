// React Modules
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

// Components
import Navbar2 from '../Components/Navbar2';
import TicketCard3 from '../Components/TicketCard3';
import TicketAction from '../Components/TicketAction';

// Ticket Page
function TicketPage() {

    // useHistory Variable
    let history = useHistory();

    // useParams Variables
    const { ticketID } = useParams();

    // useState Variables
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [urgency, setUrgency] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");

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
                Axios({
                    method: "GET",
                    withCredentials: true,
                    url: `http://localhost:5000/dashboard/ticket/${ticketID}`
                }).then(res => {
                    // Set all Ticket Info
                    setTitle(res.data.title);
                    setType(res.data.urgency);
                    setUrgency(res.data.urgency);
                    setDate(res.data.date_submitted);
                    setDescription(res.data.description);
                    setClientName(res.data.client_name);
                    setClientEmail(res.data.client_email);
                });
            }
        });
    }, []);

    // JSX
    return (
        <div>
            <Navbar2 />
            <div className="container mt-3">
                <TicketCard3
                    title={title}
                    type={type}
                    urgency={urgency}
                    date={date}
                    description={description}
                />
                <TicketAction />
            </div>
        </div>
    );
}

// Export
export default TicketPage;