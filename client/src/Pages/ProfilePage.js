// React Modules
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Components
import Navbar2 from '../Components/Navbar2';
import EmployeeInfo from '../Components/EmployeeInfo';
import TicketCard4 from '../Components/TicketCard4';
import NoTicketsCard3 from '../Components/NoTicketsCard3';

// Board Page
function ProfilePage() {

    // useHistory Variable
    let history = useHistory();

    // useState Variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [allItems, setAllItems] = useState([]);
    const [anyItems, setAnyItems] = useState(true);

    // On Page Load
    useEffect(() => {
        // GET => '/login'
        Axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:5000/login'
        }).then(results => {
            // If there is no logged in user detected, redirect to login page
            if (results.data.employee_email == null) {
                alert('You must be logged in to access this page!');
                history.push('/login');
            // Otherwise, carry on...
            } else {
                // Set Personal Employee Information
                setEmail(results.data.employee_email);
                setPassword(results.data.employee_password);
                setFirstName(results.data.first_name);
                setLastName(results.data.last_name);
                
                // GET => '/profile/:employeeEmail/tickets/completed'
                Axios({
                    method: "GET",
                    withCredentials: true,
                    url: 'http://localhost:5000/profile/' + results.data.employee_email + '/tickets/completed'
                }).then(res => {
                    // Local Items array
                    let items = [];

                    // If there is no data in the results, set anyItems? to false
                    if (res.data[0] == null) {
                        setAnyItems(false);
                    // Otherwise, add the results data to the items array
                    } else {
                        // For each item in the data set, push the data into the local array
                        for (var i = 0; i < res.data.length; i++) {
                            items.push(res.data[i]);
                        }
                        
                        // Set the allItems array to the local results data local array
                        setAllItems(items);
                    }
                });
            }
        // Catch any errors
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/dashboard');
        });
    }, []);

    // HTML Items List
    let itemList = [];

    // For each item in the useState array, create a new TicketCard Component
    allItems.forEach((item, index) => {
        itemList.push(
            <TicketCard4
                ticketInfo={item}
            />
        );
    });

    // JSX
    return (
        <div>
        <Navbar2 />
        <div className="container mt-3">
            <h1 className="mb-3">My Profile</h1>
            <EmployeeInfo
                email={email}
                password={password}
                firstName={firstName}
                lastName={lastName}
            />
            {anyItems ? <div>{itemList}</div> : <NoTicketsCard3 />}
        </div>
    </div>
    );
}

// Export
export default ProfilePage;