// React Modules
import React from 'react';

// No Ticket Card Component
function NoTicketsCard() {
    // JSX
    return (
        <div className="notickets">
            <h1 className="notickets-title">There are currently no tickets!</h1>
            <p className="notickets-text">Clients will have to submit their tickets.</p>
        </div>
    );
}

// Export
export default NoTicketsCard;