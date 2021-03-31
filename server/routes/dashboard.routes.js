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
        // Send that data
        res.send(data);

        // Success Output
        console.log(data);
        res.status(201);
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201);
    }
});

// PUT '/dashboard/ticket/:ticketID/status' => Update the status of a given ticket
router.put('/ticket/:ticketID/status', async (req, res) => {
    try {
        // Update status of a given ticket
        dashboardController.updateStatus(req.params.ticketID, req.body.status);

        // Success Output
        console.log('Ticket Status updated successfully!');
        res.status(200);
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201);
    }
});

// DELETE '/dashboard/ticket/:ticketID' => Delete a given ticket from the database
router.delete('/ticket/:ticketID', async (req, res) => {
    try {
        // Delete given ticket
        dashboardController.deleteTicket(req.params.ticketID);

        // Success Output
        console.log('Ticket deleted successfully!');
        res.status(200);
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201);
    }
});

// Export Router
module.exports = router;