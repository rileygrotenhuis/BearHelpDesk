// React Modules
import React, { useState, useEffect } from 'react';
import {
    Link
} from 'react-router-dom';

// Ticket Card Component
function TicketCard(props) {

    // useState Variables
    const [ticketURL, setTicketURL] = useState();

    // On Page Load
    useEffect(() => {
        // Set ticketURL
        setTicketURL('/ticket/' + props.ticketInfo.ticket_id);
    }, []);


    // JSX
    return (
        <div className="card-1">
            <Link to={ticketURL} style={{"textDecoration": "none"}}><h1 className="card-title-1">{props.ticketInfo.title}</h1></Link>
            <h3 className="card-subtitle">Type: {props.ticketInfo.type}</h3>
            <h3 className="card-subtitle">Urgency: {props.ticketInfo.urgency}</h3>
            <h3 className="card-subtitle">Date Submitted: {props.ticketInfo.date_submitted}</h3>
        </div>
    );
}

// Export
export default TicketCard;