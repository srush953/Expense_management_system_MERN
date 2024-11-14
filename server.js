const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require('morgan');
const connectDb = require('./config/connectDb');
const userRoute = require('./routes/userRoute.js');
//config dot env file
dotenv.config();

//database call
connectDb();
//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
//user routes
app.use('/api/v1/users', userRoute)
//transaction routes
app.use('/api/v1/transactions',require("./routes/transactionRoutes"));
//port
const PORT = 5050 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});