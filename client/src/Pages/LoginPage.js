// React Modules
import React from 'react';

// Components
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/LoginForm';

// Login Page
function LoginPage() {
    return (
        <div>
            <Navbar />
            <div className="container w-50">
                <h1>Login Page</h1>
                <LoginForm />
            </div>
        </div>
    );
}

// Export
export default LoginPage;