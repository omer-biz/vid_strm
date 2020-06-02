const express = require('express');
const userRouter = require('./routes/userRoutes');

app = express();

// body parser, put data from body to req.body
app.use(express.json({ limit: '10kb' }));



// routes
app.use('/api/users', userRouter);

module.exports = app;

