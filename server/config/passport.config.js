// PostgreSQL Database Connection
const pool = require('./db.config');

// Passport Packages
const localStrategy = require('passport-local').Strategy;

// Initialize Passport
exports.initialize = (passport) => {
    // Authenticate User
    const authenticateUser = async (username, password, done) => {
        // Get the User from the db with the given username
        var user = await pool.query("SELECT * FROM employees WHERE employee_email = $1", [username]);
        user = user.rows[0];

        // If the user does not exist, send an error
        if (user == null) {
            console.log('User does not exist');
            return done(null, false, { message: 'User does not exist' });
        }

        // Otherwise...
        try {   
            // If the User's password found above matches the password in the login form, return the authenticated user
            if (password == user.employee_email) {
                return done(null, user);
            // Otherwise, send an error
            } else {
                console.log('Password does not match!');
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    }

    // Use the username and password field as the login identification
    passport.use(new localStrategy({ usernameField: 'username' }, authenticateUser));

    // Serialize User
    passport.serializeUser((user, done) => done(null, user.username));
    // Deserialize User
    passport.deserializeUser(async (username, done) => {
        var data = await pool.query("SELECT * FROM employees WHERE employee_login = $1", [username]);
        data = data.rows[0];
        return done(null, data);
    });
}