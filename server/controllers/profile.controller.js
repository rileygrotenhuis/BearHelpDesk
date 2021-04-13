// PostgreSQL Database Connection
const pool = require('../config/db.config');

// Get all of the personal information of a given employee
exports.getEmployeeInfo = async (employee) => {
    // SQL SELECT Query
    var data = await pool.query("SELECT * FROM employees WHERE employee_email = $1", [employee]);

    // Just get the data from the above query
    data = data.rows;

    // Return the above data
    return data;
}

// Update the personal information of a given employee
exports.updateEmployeeInfo = async (password, firstName, lastName) => {
    // SQL UPDATE Query
    await pool.query("UPDATE employees SET employee_password = $1, first_name = $2, last_name = $3", [password, firstName, lastName]);
}

// This function gets all of the tickets that an employee has already completed
exports.getCompletedTickets = async (employee) => {
    // SQL SELECT Query
    var data = await pool.query("SELECT * FROM tickets WHERE employee = $1 AND status = $2", [employee, 'Completed']);

    // Just get the data from the above query
    data = data.rows;

    // Return the data
    return data;
}

// This function un-assigns an employee from a ticket
exports.incompleteTicket = async (ticketID) => {
    // SQL UPDATE Query
    await pool.query("UPDATE tickets SET status = $1, date_completed = NULL WHERE ticket_id = $2", ['In Progress', ticketID]);
}