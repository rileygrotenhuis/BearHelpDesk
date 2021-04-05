// PostgreSQL Database Connection
const pool = require('../config/db.config');

// Get all of the tickets that no employee is currently working on
exports.getAllTickets = async () => {
    // SQL SELECT Query
    var data = await pool.query("SELECT * FROM tickets WHERE employee IS NULL");

    // Just get the data from the above query
    data = data.rows;

    // Return the above data
    return data;
}

// Changes the employee who is currently working on a given ticket
exports.assignTicket = async (ticketID, employee) => {
    // SQL UPDATE Query
    await pool.query("UPDATE tickets SET employee = $1 WHERE ticket_id = $2", [employee, ticketID]);
}