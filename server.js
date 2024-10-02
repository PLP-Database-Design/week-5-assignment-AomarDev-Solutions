
// const http = require('http')

// const server = http.createServer((request, response) => {
//     if(request.url === '/'){
//         response.writeHead(200, {'Content-Type' : 'text/plain'})
//         response.end('I AM HAPPY TO LOAD A NODE.JS WEBSITE')
//     } else if(request.url === '/about'){
//         response.writeHead(200, {'Content-Type' : 'text/plain'})
//         response.end('Welcome to the the about us page.')
//     } else {
//         response.writeHead(404, {'Content-Type' : 'text/plain'})
//         response.end('Page not found.')
//     }
// })

// const PORT = 4500;

// server.listen(PORT, () => {
//   console.log('Server is running.')
// })

// dependencies
// framework to handle request
const express = require('express');

const app = express();
//  DBMS mysql
const msql = require('mysql2');
// cross origin resources
const cors = require('cors');
// Environment
const dotenv = require('dotenv');

// connecting to each other
app.use(express.json());
app.use(cors());
dotenv.config();

// connecting database
const db = msql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// check if there'sconnection
db.connect((err) => {
    //if no connection
    if(err) 
    return    console.log('Error connectting mysql')
    // if connect works
    console.log('mysql connected as an Id:', db.threadId)
});

//  Your Codes here

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

//  Your Code goes up there


app.get('/data', (req, res) => {
    //retrieve data 
    db.query('SELECT * FROM patients', (err, results) => {
        if(err) {
            console.log(err);
            res.status(500).send('Error Retrieving data')
        } else{
            res.render('data', {results: results})
        }
    })
})

// start the server
app.listen(process.env.PORT, () => {
    console.log(`server is runnig on http://localhost: ${process.env.PORT}`);
});
// sending message to the browser
console.log('Sending message to the browser.');
app.get('/', (req, res) => {
    res.send('Server Started Successfully');
});