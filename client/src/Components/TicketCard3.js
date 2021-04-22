// React Modules
import React from 'react';

// Ticket Card 3 Component
function TicketCard3(props) {
    // JSX
    return (
        <div className="card-4">
            <h1 className="card-title">{props.title}</h1>
            <h3 className="card-subtitle-2">Type: {props.type}</h3>
            <h3 className="card-subtitle-3">Urgency: {props.urgency}</h3>
            <h3 className="card-subtitle">Date Submitted: {props.date}</h3>
            <hr className="hr" />
            <p className="card-text">{props.description}</p>
        </div>
    );
}

// Export
export default TicketCard3;