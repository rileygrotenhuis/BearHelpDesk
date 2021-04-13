// PostgreSQL Database Connection
const pool = require('../config/db.config');

// This function gets all of the tickets that an employee is currently working on
exports.getCurrentTickets = async (employee) => {
    // SQL SELECT Query
    var data = await pool.query("SELECT * FROM tickets WHERE employee = $1 AND status = $2", [employee, 'In Progress']);

    // Just get the data from the above query
    data = data.rows;

    // Return the data
    return data;
}

// This function updates the status of a given ticket
exports.updateStatus = async (ticketID, newStatus) => {
    // SQL UPDATE Query
    await pool.query("UPDATE tickets SET status = $1 WHERE ticket_id = $2", [newStatus, ticketID]);
}

// This function deletes a given ticket from the database
exports.deleteTicket = async (ticketID) => {
    // SQL DELETE Query
    await pool.query("DELETE FROM tickets WHERE ticket_id = $1", [ticketID]);
}

// This function returns the information of a given ticket
exports.getTicketInfo = async (ticketID) => {
    // SQL SELECT Query
    var data = await pool.query("SELECT * FROM tickets WHERE ticket_id = $1", [ticketID]);

    // Just get the data from the above query
    data = data.rows;

    // Return the data
    return data;
}

// This function completes a ticket
exports.completeTicket = async (ticketID) => {
    // Get the currente date and convert it to a string
    const date = new Date().toLocaleDateString('en-US');

    // SQL UPDATE Query
    await pool.query("UPDATE tickets SET status = $1, date_completed = $2 WHERE ticket_id = $3", ['Completed', date, ticketID]);
}