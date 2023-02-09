import mysql from 'mysql2'

const connection = mysql.createPool({
    host: "185.104.115.124",
    user: "root",
    database: "sampproject",
    password: "shurik37",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default connection;