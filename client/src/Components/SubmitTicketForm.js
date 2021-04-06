/* title, type, urgency, description, name, email */

// React Modules
import React, { useState, useEffect } from 'react';
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

    // JSX
    return (
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="type">Type</label>
                <select onChange={(e) => setType(e.target.value)} class="form-control" id="type">
                    <option>Hardware</option>
                    <option>Software</option>
                    <option>Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="urgency">Urgency</label>
                <select onChange={(e) => setUrgency(e.target.value)} class="form-control" id="urgency">
                    <option>Minor</option>
                    <option>Moderate</option>
                    <option>Major</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea
                    class="form-control" 
                    id="description" 
                    rows="3"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    placeholder="Jane Doe" 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    placeholder="name@example.com" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button className="btn btn-md btn-primary mt-3">Submit Ticket</button>
        </form>
    );
}

// Export
export default SubmitTicketForm;