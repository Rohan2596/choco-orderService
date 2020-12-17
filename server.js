const express=require('express')
const app=express();
const routes=require('./routes/route')
const createError = require('http-errors')

//Express Validator
const expressValidator = require('express-validator');
app.use(expressValidator());


app.use("/choco/customer/order",routes);


app.use((req, res, next) => {
    next(createError(404));
})

app.use((error, req, res, next) => {
    let response = {
        success: false,
        status: 500,
        message: error.message
    };
    res.json(response);
})


app.listen(3001,()=>{
    console.log("Listening to port 3001 for Ordering Service.");
})

