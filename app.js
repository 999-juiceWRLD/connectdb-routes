const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const connectDB = require("./server");

const app = express();


const port = 3000;
const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log("Running on " + port));
    } catch (err) {
        console.log(err);
    }
}

start();

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
