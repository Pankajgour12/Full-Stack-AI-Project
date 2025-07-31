const mongoose = require('mongoose');



function connectDB(){
    mongoose.connect(process.env.MONGOOSE_URL)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch(err=>{
        console.log("DB are not Connected",err)
    })
}


module.exports = connectDB;