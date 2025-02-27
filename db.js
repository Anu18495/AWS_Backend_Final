// db.js
const { Pool } = require('/root/nodejs-backend/node_modules/pg');

// Create a pool of connections to PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,           // Your DB user
    host: process.env.DB_HOST,           // Your AWS RDS PostgreSQL DB endpoint
    database: process.env.DB_NAME,       // Your DB name
    password: process.env.DB_PASSWORD,   // Your DB password
    port: process.env.DB_PORT || 5432,   // Default port for PostgreSQL
});

// Export the pool object for querying the database
module.exports = pool;
// Check the pool connection when the app starts
pool.connect()
    .then(() => console.log('Connected to the database successfully'))
    .catch((err) => console.error('Error connecting to the database:', err));

