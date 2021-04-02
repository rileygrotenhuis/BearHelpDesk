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
            res.status(201);
        // If the passwords do not match, output that
            console.log('Employee does not exist');
        } else if (info.message == 'Passwords does not exist') {
            res.status(202);
            console.log('Passwords does not exist');
        // Otherwise, log an employee in
        } else {
            req.logIn(user, (err) => {
                // Throw any errors
                if (err) throw err;
                // Success Output
                res.status(200);
                console.log('Successfully Authenticated');
                console.log(req.user);
            });
        }
    })(req, res, next);
});

// Export Router
module.exports = router;