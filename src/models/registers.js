const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true

    },
    email : {
        type:String,
        required:true,
    
    },
    subject : {
        type:String,
        required:true,
    },
    message : {
        type:String,
        required:true
    },
   
 
});


// employeeSchema.pre("save", async function(next){

//     if(this.isModified('password')){
        
//         console.log(`the password is ${this.password}`);
//         this.password = await bcrypt.hash(this.password, 10);
//         console.log(`the password is ${this.password}`);

//         this.confirmpassword=undefined;
//     }
//     next();
// })

// Now we need to create collection

const Register = new mongoose.model("Register", employeeSchema);

module.exports= Register;

