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
        // PUT => '/dashboard/ticket/:ticketID/status/complete'
        Axios({
            method: "PUT",
            withCredentials: true,
            url: "http://localhost:5000/dashboard/ticket/" + props.ticketID + "/status/complete"
        }).then(results => {
            // If the status is clean, alert the user and redirect to Dashboard Page
            if (results.status.toString() == '200') {
                alert('Ticket has been marked as complete!');
                history.push('/dashboard');
            // Otherwise, alert the user of the error
            } else {
                alert('There was an error while trying to complete this ticket');
            }
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/dashboard');
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
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/dashboard');
        }); 
    }

    // Unassign Button Click
    const unassignTicket = () => {
        // PUT => '/dashboard/ticket/:ticketID/unassign'
        Axios({
            method: "PUT",
            withCredentials: true,
            url: 'http://localhost:5000/dashboard/ticket/' + props.ticketID + '/unassign'
        }).then(results => {
            // If the status is clean, alert the user and redirect to Dashboard Page
            if (results.status.toString() == '200') {
                alert('Ticket has been unassigned!');
                history.push('/dashboard');
            // Otherwise, alert the user of the error
            } else {
                alert('There was an error while trying to unassign yourself from this ticket');
            }
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/dashboard');
        })
    }

    // JSX
    return (
        // <div>
        //     <button onClick={completeTicket} className="btn btn-md btn-primary">Complete</button>
        //     <button onClick={deleteTicket} className="btn btn-md btn-danger">Delete</button>
        //     <button onClick={unassignTicket} className="btn btn-md btn-success">Unassign</button>
        // </div>

        <div className="ticketAction">
            <div>
                <button onClick={completeTicket} className="ticketAction-button-1">Complete</button>
                <button onClick={unassignTicket} className="ticketAction-button-2">Unassign</button>
            </div>
            <div>
                <button onClick={deleteTicket} className="ticketAction-button-3">Delete</button>
            </div>
        </div>
    );
}

// Export
export default TicketAction;