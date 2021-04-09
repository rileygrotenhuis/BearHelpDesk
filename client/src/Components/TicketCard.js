// React Modules
import React from 'react';

// Ticket Card Component
function TicketCard(props) {
    // JSX
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{props.urgency}</h6>
                <p className="">Date Submitted: {props.date}</p>
            </div>
        </div>
    );
}

// Export
export default TicketCard;