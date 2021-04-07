// React Modules
import React from 'react';

// Components
import Navbar from '../Components/Navbar';
import SubmitTicketForm from '../Components/SubmitTicketForm';

// Submit Page
function SubmitPage() {
    return (
        <div>
            <Navbar />
            <div className="container w-50">
                <h1 className="mt-3">Submit Page</h1>
                <SubmitTicketForm />
            </div>
        </div>
    );
}

// Export
export default SubmitPage;