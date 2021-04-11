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
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <Link to={ticketURL}><h5 className="card-title">{props.ticketInfo.title}</h5></Link>
                <h6 className="card-subtitle mb-2 text-muted">Type: {props.ticketInfo.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Urgency: {props.ticketInfo.urgency}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date Submitted: {props.ticketInfo.date_submitted}</h6>
            </div>
        </div>
    );
}

// Export
export default TicketCard;