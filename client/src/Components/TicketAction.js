// React Modules
import React from 'react';

// Ticket Action Component
function TicketAction() {
    // JSX
    return (
        <div>
            <button className="btn btn-md btn-primary">Complete</button>
            <button className="btn btn-md btn-danger">Delete</button>
        </div>
    );
}

// Export
export default TicketAction;