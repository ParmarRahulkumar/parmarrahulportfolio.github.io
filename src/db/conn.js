const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/resume", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection was successfull`);
}).catch((e)=>{
    console.log(`Connection fail`);
});