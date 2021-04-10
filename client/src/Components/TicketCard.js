// React Modules
import React from 'react';

// Ticket Card Component
function TicketCard(props) {
    // JSX
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {props.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Urgency: {props.urgency}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date Submitted: {props.date}</h6>
            </div>
        </div>
    );
}

// Export
export default TicketCard;