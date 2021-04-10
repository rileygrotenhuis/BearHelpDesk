// React Modules
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// Components
import TicketCard from '../Components/TicketCard';
import NoTicketsCard from '../Components/NoTicketsCard';
import Navbar2 from '../Components/Navbar2';

// Dashboard Page
function DashboardPage() {

    // useHistory Variable
    let history = useHistory();

    // useState Variables
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
                // GET => '/dashboard/:employeeEmail/tickets/current'
                Axios({
                    method: "GET",
                    withCredentials: true,
                    url: 'http://localhost:5000/dashboard/rg1050@live.missouristate.edu/tickets/current'
                }).then(results => {
                    // Local Items array
                    let items = [];

                    // If there is no data in the results, set anyItems? to false
                    if (results.data[0] == null) {
                        setAnyItems(false);
                    // Otherwise, add the results data to the items array
                    } else {
                        // For each item in the data set, push the data into the local array
                        for (var i = 0; i < results.data.length; i++) {
                            items.push(results.data[i]);
                        }
                        
                        // Set the allItems array to the local results data local array
                        setAllItems(items);
                    }
                });
            }
        }).catch(function(error) {
            alert('An error has occured while accessing this page.');
            history.push('/');
        })
    }, []);

    // HTML Items List
    let itemList = [];

    // For each item in the useState array, create a new TicketCard Component
    allItems.forEach((item, index) => {
        itemList.push(
            <TicketCard
                title={item.title}
                type={item.type}
                urgency={item.urgency}
                date={item.date_submitted}
            />
        );
    });

    // JSX
    return (
        <div>
            <Navbar2 />
            <div className="container mt-3">
                <h1 className="mb-3">Dashboard Page</h1>
                {anyItems ? <div>{itemList}</div> : <NoTicketsCard />}
            </div>
        </div>
    );
}

// Export
export default DashboardPage;