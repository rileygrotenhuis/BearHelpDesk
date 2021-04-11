// React Modules
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Ticket Page
function TicketPage() {

    // useParams Variables
    const { ticketID } = useParams();

    // JSX
    return (
        <div>
            <h1>Ticket Page</h1>
        </div>
    );
}

// Export
export default TicketPage;