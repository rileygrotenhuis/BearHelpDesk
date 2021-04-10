// React Modules
import React from 'react';

// Components
import Navbar2 from '../Components/Navbar2';
import TicketCard2 from '../Components/TicketCard2';

// Board Page
function BoardPage() {
    // JSX
    return (
        <div>
            <Navbar2 />
            <h1>Board Page</h1>
            <TicketCard2 
                title="Test Ticket"
                type="Hardware"
                urgency="Minor"
                date="01/03/2021"
            />
        </div>
    );
}

// Export
export default BoardPage;