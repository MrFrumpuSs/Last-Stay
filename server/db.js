import mysql from 'mysql2'

const connection = mysql.createPool({
    host: "92.255.109.121",
    user: "root",
    database: "sampproject",
    password: "eX6iPdK4",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default connection;