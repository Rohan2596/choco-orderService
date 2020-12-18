const mongoose=require('mongoose');
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/got',{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully Connected to the Database");
}).catch(err=>{
    console.log("Could not connect to the database.Exiting now...",err);
    process.exit();
})


