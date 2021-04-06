// Express
const express = require('express');
const router = express.Router();

// Controller
const submitController = require('../controllers/submit.controller');

// POST '/submit/ticket' => Creates a new IT Support Ticket and add it to the database
router.post('/ticket', async (req, res) => {
    try {
        // Submit a new ticket using the submitController
        submitController.submitTicket(req.body.title, req.body.type, req.body.urgency, req.body.description, req.body.name, req.body.email);
        // Success Output
        console.log('Ticket Submitted Successfully!');
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// Export Router
module.exports = router;