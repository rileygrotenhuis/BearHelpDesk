// React Modules
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// Components
import TicketCard from '../Components/TicketCard';

// Dashboard Page
function DashboardPage() {

    // useState Variables
    const [allItems, setAllItems] = useState([]);

    // On Page Load
    useEffect(() => {
        // GET => '/dashboard/:employeeEmail/tickets/current'
        Axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:5000/dashboard/rg1050@live.missouristate.edu/tickets/current'
        }).then(results => {
            // Local Items array
            let items = [];

            // For each item in the data set, push the data into the local array
            for (var i = 0; i < results.data.length; i++) {
                items.push(results.data[i]);
            }

            // Set the allItems useState array to the local array
            setAllItems(items);
        }); 
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
            <ul>
                {itemList}
            </ul>
        </div>
    );
}

// Export
export default DashboardPage;