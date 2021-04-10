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
            <div className="container mt-3">
                <h1 className="mb-3">Board Page</h1>
                <TicketCard2 
                    title="Test"
                    type="Hardware"
                    urgency="Major"
                    date="01/10/2021"
                />
            </div>
        </div>
    );
}

// Export
export default BoardPage;