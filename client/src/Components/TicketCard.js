// React Modules
import React from 'react';

// Ticket Card Component
function TicketCard(props) {
    // JSX
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.ticketInfo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {props.ticketInfo.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Urgency: {props.ticketInfo.urgency}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date Submitted: {props.ticketInfo.date_submitted}</h6>
            </div>
        </div>
    );
}

// Export
export default TicketCard;