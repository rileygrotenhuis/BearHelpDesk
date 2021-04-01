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

// Routes
app.use('/submit', require('./routes/submit.routes'));
app.use('/dashboard', require('./routes/dashboard.routes'));
app.use('/contact', require('./routes/contact.routes'));
app.use('/profile', require('./routes/profile.routes'));
app.use('/board', require('./routes/board.routes'));

/*
// Routes
const submitRoutes = require('./routes/submit.routes');
app.use('/submit', submitRoutes);
const dashboardRoutes = require('./routes/dashboard.routes');
app.use('/dashboard', dashboardRoutes);
const contactRoutes = require('./routes/contact.routes');
app.use('/contact', contactRoutes);
const profileRoutes = require('./routes/profile.routes');
app.use('/profile', profileRoutes);
const boardRoutes = require('./routes/board.routes');
app.use('/board', boardRoutes);
*/

// Listen
app.listen(PORT, () => {
    console.log(`Bear Help Desk is running at ${PORT}`);
});