const pool = require("./db");

const createUsersTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    try {
        await pool.query(query);
        console.log("Users table created successfully!");
    } catch (err) {
        console.error("Error creating users table:", err);
    }
};

createUsersTable();

