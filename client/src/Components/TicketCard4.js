// React Modules
import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Ticket Card Component
function TicketCard(props) {

    // useHistory Variable
    let history = useHistory();

    // Incomplete a given ticket
    const incomplete = () => {
        Axios({
            method: "PUT",
            withCredentials: true,
            url: 'http://localhost:5000/profile/ticket/' + props.ticketInfo.ticket_id + '/incomplete'
        }).then(results => {
            if (results.status.toString() == '200') {
                alert('This ticket has been marked as incomplete!');
                history.push('/dashboard');
            } else {
                alert('There was an issue while incompleting this ticket');
            }
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/dashboard');
        });
    }

    // JSX
    return (
        <div className="card-3">
            <h1 className="card-title">{props.ticketInfo.title}</h1>
            <h3 className="card-subtitle">Type: {props.ticketInfo.type}</h3>
            <h3 className="card-subtitle">Urgency: {props.ticketInfo.urgency}</h3>
            <h3 className="card-subtitle">Date Submitted: {props.ticketInfo.date_submitted}</h3>
            <button onClick={incomplete} className="card-button-2">Incomplete</button>
        </div>
    );
}

// Export
export default TicketCard;