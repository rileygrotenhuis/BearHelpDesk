// React Modules
import React, { useState } from 'react';
import Axios from 'axios';

// Contact Form Component
function ContactForm(props) {

    // useState Variables
    const [message, setMessage] = useState("");

    // Contact Button Click
    const contact = () => {
        // POST => '/contact/:clientEmail'
        Axios({
            method: "POST",
            data: {
                "emailBody": message
            },
            withCredentials: true,
            url: 'http://localhost:5000/contact/' + props.email
        }).then(results => {
            if (results.status.toString() === '200') {
                alert('You have messaged the client');
                document.getElementById('message').value = '';
            } else {
                alert('An error has occured while messaging the client!');
            }
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
        });
    }

    // JSX
    return (
        <div className="w-50">
            <h1>Send Message to Client</h1>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    class="form-control" 
                    id="message" 
                    rows="3"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button onClick={contact} className="btn btn-md btn-primary mt-3">Send</button>
        </div>
    );
}

// Export
export default ContactForm;