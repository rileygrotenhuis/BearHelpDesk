// React Modules
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// Components
import TicketCard from '../Components/TicketCard';
import NoTicketsCard from '../Components/NoTicketsCard';

// Dashboard Page
function DashboardPage() {

    // useState Variables
    const [allItems, setAllItems] = useState([]);
    const [anyItems, setAnyItems] = useState(true);

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
            {anyItems ? <ul>{itemList}</ul> : <NoTicketsCard />}
        </div>
    );
}

// Export
export default DashboardPage;