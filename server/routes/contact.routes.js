// Express
const express = require('express');
const router = express.Router();

// Controller
const contactController = require('../controllers/contact.controller');

// POST '/contact/:clientEmail' => Send an email to the client with their given email address
router.post('/:clientEmail', async (req, res) => {
    try {
        // Send email to client
        contactController.contactClient(req.params.clientEmail, req.body.emailBody);

        // Success Output
        console.log("Email Sent!");
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// Export Router
module.exports = router;