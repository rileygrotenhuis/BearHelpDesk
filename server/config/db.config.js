// Node Module
const Pool = require('pg').Pool;

// Define new PostgreSQL Pool
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    password: '',
    database: 'bearhelpdesk'
});

// Export
module.exports = pool;