// React Modules
import React from 'react';

// No Ticket Card Component
function NoTicketsCard() {
    // JSX
    return (
        <div className="notickets">
            <h1 className="notickets-title">You currently have no tickets!</h1>
            <p className="notickets-text">You will have to claim tickets on the Board Page</p>
        </div>
    );
}

// Export
export default NoTicketsCard;