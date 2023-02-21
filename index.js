const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('', (req, resp) => {
    resp.send("Welcome to the home Page");
});

app.get('/about', (req, resp) => {
    console.log("your name is: ", req.query.name);
    resp.send(`Welcome, You are inside About Page ${req.query.name}`);
});


app.listen(5000);


// http.createServer( (req, resp) => {
//     resp.write("Hi, Welcome to the code behavior");
//     resp.end();
// }).listen(4500);

// console.log(process.argv[2]);
// console.log(process.argv[2]);
// console.log("what is my name");

var a=10;

console.log("first log");

var  waitingData = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(20)
   }, 2000 );
});

waitingData.then( (data) => {
    console.log(a+data);
});







 