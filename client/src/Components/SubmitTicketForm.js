// React Modules
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Submit Ticket Form Components
function SubmitTicketForm() {

    // History Variable
    let history = useHistory();

    // useState Variables
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Hardware");
    const [urgency, setUrgency] = useState("Minor");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Handle Click
    const handleClick = async () => {
        // If any of the fields are missing, inform the user
        if (title === '' || description === '' || name === '' || email === '') {
            alert('Missing form fields!');
        // Otherwise...
        } else {
            // POST => '/submit/ticket'
            await Axios({
                method: "POST",
                data: {
                    "title": title,
                    "type": type,
                    "urgency": urgency,
                    "description": description,
                    "name": name,
                    "email": email
                },
                withCredentials: true,
                url: "http://localhost:5000/submit/ticket"
            }).then(res => {
                // If the status passed, submit ticket and redirect to Home Page
                if (res.status === 200) {
                    alert('Ticket has been submitted successfully!');
                    history.push('/');
                // Otherwise, alert the user
                } else {
                    alert('There was an error while submitting your ticket. Try again');
                }
            // Catch any errors
            }).catch(function(error) {
                if (error) {
                    alert('An error occurred while submitting this ticket! Try again later.');
                    console.log(error);
                }
            });
        }
    }

    // JSX
    return (
        // <div>
        //     <div class="form-group">
        //         <label for="title">Title</label>
        //         <input 
        //             type="text" 
        //             class="form-control" 
        //             id="title" 
        //             onChange={(e) => setTitle(e.target.value)}
        //         />
        //     </div>
        //     <div class="form-group">
        //         <label for="type">Type</label>
        //         <select onChange={(e) => setType(e.target.value)} class="form-control" id="type">
        //             <option>Hardware</option>
        //             <option>Software</option>
        //             <option>Other</option>
        //         </select>
        //     </div>
        //     <div class="form-group">
        //         <label for="urgency">Urgency</label>
        //         <select onChange={(e) => setUrgency(e.target.value)} class="form-control" id="urgency">
        //             <option>Minor</option>
        //             <option>Moderate</option>
        //             <option>Major</option>
        //         </select>
        //     </div>
        //     <div class="form-group">
        //         <label for="description">Description</label>
        //         <textarea
        //             class="form-control" 
        //             id="description" 
        //             rows="3"
        //             onChange={(e) => setDescription(e.target.value)}
        //         />
        //     </div>
        //     <div class="form-group">
        //         <label for="name">Full Name</label>
        //         <input 
        //             type="text" 
        //             class="form-control" 
        //             id="name" 
        //             placeholder="Jane Doe" 
        //             onChange={(e) => setName(e.target.value)}
        //         />
        //     </div>
        //     <div class="form-group">
        //         <label for="email">Email</label>
        //         <input 
        //             type="email" 
        //             class="form-control" 
        //             id="email" 
        //             placeholder="name@example.com" 
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //     </div>
        //     <button onClick={handleClick} className="btn btn-md btn-primary mt-3">Submit Ticket</button>
        // </div>

        <div className="form">
        <h1 className="form-title">Submit IT Support Ticket</h1>
        <div>
            <label className="form-label-1">Descriptive Title:</label>
            <input 
                className="form-input-1" 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label-1">Type:</label>
            <input 
                className="form-input-1" 
                type="text" 
                onChange={(e) => setType(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label-1">Urgency:</label>
            <input 
                className="form-input-1" 
                type="text" 
                onChange={(e) => setUrgency(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label-1">What's your issue?</label>
            <textarea 
                className="form-textarea" 
                row="3" 
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label-1">Full Name:</label>
            <input 
                className="form-input-1" 
                type="text" 
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label-1">Email Address:</label>
            <input 
                className="form-input-1" 
                type="text" 
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button onClick={handleClick} className="form-button-1">Send</button>
        </div>
    );
}

// Export
export default SubmitTicketForm;