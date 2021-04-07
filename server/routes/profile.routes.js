/*
    STATUS KEY:
    - 200 = Success
    - 201 = Failure
*/

// Express
const express = require('express');
const router = express.Router();

// Controller
const profileController = require('../controllers/profile.controller');

// GET '/profile/employee/:employeeEmail' => Get all of the personal information of a given employee
router.get('/employee/:employeeEmail', async (req, res) => {
    try {
        // Get all of the data for a given employee
        const data = await profileController.getEmployeeInfo(req.params.employeeEmail);
        // Send that data
        res.send(data);

        // Success Output
        console.log(data);
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// PUT '/profile/employee/:employeeEmail' => Update the personal information of a given employee
router.put('/employee/:employeeEmail', async (req, res) => {
    try {
        // Update employee info
        profileController.updateEmployeeInfo(req.body.password, req.body.first_name, req.body.last_name);

        // Success Output
        console.log('Employee ' + req.params.employeeEmail + " updated!");
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// GET '/profile/:employeeEmail/tickets/completed' => Get all of the tickets that an employee is currently working on
router.get('/:employeeEmail/tickets/completed', async (req, res) => {
    try {
        // Get all of the tickets an employee is working on
        const data = await profileController.getCompletedTickets(req.params.employeeEmail);
        // Send that data
        res.send(data);

        // Success Output
        console.log(data);
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send.send();
    }
});

// Export Router
module.exports = router;