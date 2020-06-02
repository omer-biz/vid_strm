import express from 'express';

app = express();

const server = app.listen(3000, 'localhost', () => {
    console.log('listeing on port 3000 ...');
});
