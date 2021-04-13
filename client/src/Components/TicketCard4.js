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
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.ticketInfo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {props.ticketInfo.type}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Urgency: {props.ticketInfo.urgency}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date Submitted: {props.ticketInfo.date_submitted}</h6>
                <button onClick={incomplete} className="btn btn-md btn-danger">Incomplete</button>
            </div>
        </div>
    );
}

// Export
export default TicketCard;