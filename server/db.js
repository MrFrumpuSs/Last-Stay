import mysql from 'mysql2'

const connection = mysql.createPool({
    host: "localhost",
    user: "Other",
    database: "sampproject",
    password: "5SPAdWvJSdGBYVKa",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default connection;