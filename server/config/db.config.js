// Node Module
const Pool = require('pg').Pool;

// Define new PostgreSQL Pool

// OLD CONNECTION
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    password: '',
    database: 'bearhelpdesk'
});


/* NEW CONNECTION
const pool = new Pool({
    host: 'ec2-54-145-102-149.compute-1.amazonaws.com',
    port: 5432,
    password: 'd4773495e2719da47d5d5f5b987f279049bb249ff150c27b5a7e4c6b3596e7fb',
    database: 'dbjmp22s3qu7d7'
});
*/

// Export
module.exports = pool;