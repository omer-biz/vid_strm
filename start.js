const express = require('express');
const userRouter = require('./routes/userRoutes');

app = express();

// routes
app.use('/api/users', userRouter);

module.exports = app;

