/*
    STATUS KEY:
    - 200 = Success
    - 201 = Failure
*/

// Express
const express = require('express');
const router = express.Router();

// Controller
const dashboardController = require('../controllers/dashboard.controller');

// GET '/dashboard/:employeeEmail/tickets/current' => Get all of the tickets that an employee is currently working on
router.get('/:employeeEmail/tickets/current', async (req, res) => {
    try {
        // Get all of the tickets an employee is working on
        const data = await dashboardController.getCurrentTickets(req.params.employeeEmail);

        // Convert the urgencies
        for (var i = 0; i < data.length; i++) {
            if (data[i].urgency === 1) {
                data[i].urgency = 'Major';
            } else if (data[i].urgency === 2) {
                data[i].urgency = 'Moderate';
            } else {
                data[i].urgency = 'Minor'
            }
        }

        // Send that data
        res.status(200).send(data);

        // Success Output
        console.log(data);
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// PUT '/dashboard/ticket/:ticketID/status' => Update the status of a given ticket
router.put('/ticket/:ticketID/status', async (req, res) => {
    try {
        // Update status of a given ticket
        dashboardController.updateStatus(req.params.ticketID, req.body.status);

        // Success Output
        console.log('Ticket Status updated successfully!');
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// DELETE '/dashboard/ticket/:ticketID' => Delete a given ticket from the database
router.delete('/ticket/:ticketID', async (req, res) => {
    try {
        // Delete given ticket
        dashboardController.deleteTicket(req.params.ticketID);

        // Success Output
        console.log('Ticket deleted successfully!');
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// GET '/dashboard/ticket/:ticketID' => Get all of the information from a given ticket
router.get('/ticket/:ticketID', async (req, res) => {
    try {
        // Get the information of a given ticket
        const data = await dashboardController.getTicketInfo(req.params.ticketID);

        // Send that data
        res.status(200).send(data[0]);

        // Success Output
        console.log(data);
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
})

// Export Router
module.exports = router;