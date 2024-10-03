// const express = require('express')
//  const db = require('./database')
// const app = express();

// const port = 3500;

// // app.get('/', (req, res) => {
// //     res.send('Hello, you are now using the express package.')
// // })

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`)
// // })
// // Route to create a new table in the database
// app.get('/create-table', (req, res) => {
//     let sql = `CREATE TABLE users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255),
//         email VARCHAR(255),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//     db.query(sql, (err, result) => {
//         if (err) {
//             res.send('Error creating table: ' + err.message);
//             return;
//         }
//         res.send('Table "users" created successfully');
//     });
// });

// // Route to insert a new user into the table
// app.get('/add-user', (req, res) => {
//     let user = { name: 'John Doe', email: 'john.doe@example.com' };
//     let sql = 'INSERT INTO users SET ?';

//     db.query(sql, user, (err, result) => {
//         if (err) {
//             res.send('Error inserting user: ' + err.message);
//             return;
//         }
//         res.send('User added successfully');
//     });
// });

// // Route to get all users from the table
// app.get('/users', (req, res) => {
//     let sql = 'SELECT * FROM users';

//     db.query(sql, (err, results) => {
//         if (err) {
//             res.send('Error fetching users: ' + err.message);
//             return;
//         }
//         res.json(results);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// Array Practice
let numbers = [5, 3, 8, 5, 2, 3, 7, 8, 1];
let uniqueNumbers = [...new Set(numbers)].sort((a,b) => 
    a - b);
console.log(uniqueNumbers);



