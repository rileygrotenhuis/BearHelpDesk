// React Modules
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Login Form Component 
function LoginForm() {

    // useHistory Variable
    let history = useHistory();

    // useState Variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Handle Click
    const login = async () => {
        // If any of the fields are missing, inform the user
        if (username === '' || password === '') {
            alert('Missing form fields!');
        // Otherwise...
        } else {
            // POST => '/login'
            await Axios({
                method: "POST",
                data: {
                    "username": username,
                    "password": password
                },
                withCredentials: true,
                url: 'http://localhost:5000/login'
            }).then(res => {
                // If the status passes, redirect to Home Page (for now...)
                if (res.status.toString() === '200') {
                    alert('Successully Authenticated!');
                    history.push('/');
                // Alert the user if the employee does not exist
                } else if (res.status.toString() === '201') {
                    alert('Employee does not exist!');
                // Alert the user if the password is incorrect
                } else if (res.status.toString() === '202') {
                    alert('Incorrect password, try again!');
                }
            // Catch any errors
            }).catch(function(error) {
                if (error) {
                    alert('An error has occured while trying to log in! Try again at a later time.');
                    console.log(error);
                }
            });
        }
    }

    // JSX
    return (
        <div>
            <div class="form-group">
                <label for="username">Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="title" 
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="title" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={login} className="btn btn-md btn-primary mt-3">Login</button>
        </div>
    )
}

// Export
export default LoginForm;