// import express from 'express';

const dotenv = require('dotenv');
const app = require('./start');

dotenv.config(`${__dirname}/config.env`);

// start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, 'localhost', () => {
    console.log(`listeing on port ${port}...`);
});
