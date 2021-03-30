// PostgreSQL Database Connection
const pool = require('../config/db.config');

// This function creates a new IT Support Ticket and inserts it to the database
exports.submitTicket = async (title, type, urgency, description, name, email) => {

    // Get the currente date and convert it to a string
    const date = new Date().toLocaleDateString('en-US');

    // Convert urgency string to it's corresponding integer value for the database
    if (urgency == 'Major') {
        urgency_digit = 1;
    } else if (urgency == 'Moderate') {
        urgency_digit = 2;
    } else {
        urgency_digit = 3;
    }

    // SQL INSERT Query
    await pool.query("INSERT INTO tickets(title, type, urgency, description, date_submitted, status, client_name, client_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [title, type, urgency_digit, description, date, "Backlog", name, email]);
}