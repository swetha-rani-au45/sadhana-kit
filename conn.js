const mongoose  = require("mongoose");

const DB = "mongodb+srv://swetha:<password>@cluster0.gcqejgn.mongodb.net/NIGRAHA?retryWrites=true&w=majority";

//creating a database 
mongoose.connect(DB, {
    useCreateIndex:true,
    useNewURLParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log("connection successful");
}).catch((error) => {
    console.log(error);

})
