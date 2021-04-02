// Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL Database Connection
const pool = require('./config/db.config');

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Passport Configuration
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./config/passport.config');
initializePassport(passport);
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/submit', require('./routes/submit.routes'));
app.use('/dashboard', require('./routes/dashboard.routes'));
app.use('/contact', require('./routes/contact.routes'));
app.use('/profile', require('./routes/profile.routes'));
app.use('/board', require('./routes/board.routes'));

// Listen
app.listen(PORT, () => {
    console.log(`Bear Help Desk is running at ${PORT}`);
});