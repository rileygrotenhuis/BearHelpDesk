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
                if (error) {
                    alert('An error occured!');
                    console.log(error);
                }
            });
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
                <button onClick={assign} className="btn btn-md btn-primary">Claim Ticket</button>
            </div>
        </div>
    );
}

// Export
export default TicketCard2;