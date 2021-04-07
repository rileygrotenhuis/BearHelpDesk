/*
    STATUS KEY:
    - 200 = Success
    - 201 = Failure
*/

// Express
const express = require('express');
const router = express.Router();

// Controller
const boardController = require('../controllers/board.controller');

// GET '/board/tickets/all' => Get all of the tickets that no employee is currently workign on
router.get('/tickets/all', async (req, res) => {
    try {
        // Get all of the tickets not being worked on
        const data = await boardController.getAllTickets();

        // If there are no tickets currently working
        if (data[0] == null) {  
            console.log("There are currently no tickets");
            res.status(202);
        // Otherwise...
        } else {
            // Send that data
            res.send(data);

            // Success Output
            console.log(data);
            res.status(200).send();
        }
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// PUT '/board/ticket/:ticketID/assign' => Changes the employee who is currently working on a given ticket
router.put('/ticket/:ticketID/assign', async (req, res) => {
    try {
        // Assign ticket to employee
        boardController.assignTicket(req.params.ticketID, req.body.employee);

        // Sucess Output
        console.log('Ticket has been assigned to ' + req.body.employee);
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// Export Router
module.exports = router;