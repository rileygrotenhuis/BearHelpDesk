/*
    STATUS KEY:
    - 200 = Success
    - 201 = Employee doesn't exist
    - 202 = Password does not match
*/

// Express
const express = require('express');
const router = express.Router();
const passport = require('passport');

// POST '/login' => Authenticates the Employee who logged in
router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {

        // Throw any errors
        if (err) throw err;

        // If no employee exists, output that
        if (info.message == "Employee does not exist") {
            res.status(201).send();
        // If the passwords do not match, output that
            console.log('Employee does not exist');
        } else if (info.message == 'Passwords does not exist') {
            res.status(202).send();
            console.log('Passwords does not exist');
        // Otherwise, log an employee in
        } else {
            req.logIn(user, (err) => {
                // Throw any errors
                if (err) throw err;
                // Success Output
                res.status(200).send();
                console.log('Successfully Authenticated');
                console.log(req.user);
            });
        }
    })(req, res, next);
});

// GET '/login' => Returns logged in Employee's data
router.get('/login', (req, res) => {
    res.send(req.user);
});

// DELETE '/logout' => Logs an employee out
router.delete('/logout', async (req, res) => {
    try {
        // Logout
        req.logOut();

        // Success Output
        console.log('Successfully logged out');
        res.status(200).send();
    } catch (e) {
        // Failure Output
        console.log(e);
        res.status(201).send();
    }
});

// Export Router
module.exports = router;