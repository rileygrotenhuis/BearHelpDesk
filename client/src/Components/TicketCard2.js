// React Modules
import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Ticket Card Component
function TicketCard2(props) {

    // useHistory Variable
    let history = useHistory();

    // Assign
    const assign = () => {
        // GET => '/login'
        Axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:5000/login'
        }).then(results => {
            // PUT => '/board/ticket/:ticketID/assign'
            Axios({
                method: "PUT",
                withCredentials: true,
                data: {
                    "employee": results.data.employee_email
                },
                url: 'http://localhost:5000/board/ticket/' + props.ticketInfo.ticket_id + '/assign'
            }).then(res => {
                if (res.status.toString() === '200') {
                    alert('Ticket has been assigned to you!');
                    history.push('/dashboard');
                } else {
                    alert('An error has occured while trying to claim this ticket!');
                }
            }).catch(function(error) {
                alert('An error has occured while accessing this page.');
                history.push('/');
            });
        });
    }

    // JSX
    return (
        <div className="card-2">
            <h1 className="card-title-1">{props.ticketInfo.title}</h1>
            <h3 className="card-subtitle">Type: {props.ticketInfo.type}</h3>
            <h3 className="card-subtitle">Urgency: {props.ticketInfo.urgency}</h3>
            <h3 className="card-subtitle">Date Submitted: {props.ticketInfo.date_submitted}</h3>
            <button onClick={assign} className="card-button-1">Claim</button>
        </div>
    );
}

// Export
export default TicketCard2;