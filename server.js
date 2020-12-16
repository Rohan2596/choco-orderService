const express=require('express')
const app=express();
const routes=require('./routes/route')

app.use("/choco/customer/order",routes);



app.listen(3001,()=>{
    console.log("Listening to port 3001 for Ordering Service.");
})
