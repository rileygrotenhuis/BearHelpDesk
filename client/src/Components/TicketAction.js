// React Modules
import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

// Ticket Action Component
function TicketAction(props) {

    // useHistory Variable
    let history = useHistory();

    // Complete Button Click
    const completeTicket = () => {
        // PUT => '/dashboard/ticket/:ticketID/status'
        Axios({
            method: "PUT",
            data: {
                "status": "Complete"
            },
            withCredentials: true,
            url: "http://localhost:5000/dashboard/ticket/" + props.ticketID + "/status"
        }).then(results => {
            // If the status is clean, alert the user and redirect to Dashboard Page
            if (results.status.toString() == '200') {
                alert('Ticket has been marked as complete!');
                history.push('/dashboard');
            // Otherwise, alert the user of the error
            } else {
                alert('There was an error while trying to complete this ticket');
            }
        });
    }

    // Delete Button Click
    const deleteTicket = () => {
        // DELETE => '/dashboard/ticket/:ticketID'
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: "http://localhost:5000/dashboard/ticket/" + props.ticketID
        }).then(results => {
            // If the status is clean, alert the user and redirect to Dashboard Page
            if (results.status.toString() == '200') {
                alert('Ticket has been deleted!');
                history.push('/dashboard');
            // Otherwise, alert the user of the error
            } else {
                alert('There was an error while trying to delete this ticket');
            }
        }); 
    }

    // JSX
    return (
        <div>
            <button onClick={completeTicket} className="btn btn-md btn-primary">Complete</button>
            <button onClick={deleteTicket} className="btn btn-md btn-danger">Delete</button>
        </div>
    );
}

// Export
export default TicketAction;