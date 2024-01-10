const mongoose=require('mongoose');
const validate=require('validator')

const userSchema=new mongoose.Schema({
      name:{
        type:String,
        required:true,
        trim:true
      },
      email:{
        type:String,
        required:true,
        unique: true,
        validate(value){
            if(!validate.isEmail(value)) {
                throw new Error("Invalid Email Address")
        }
      }
    },
    mobile:{
        type: String,
        required:true,
        unique:true,
        maxlength:10
    },
    password:{
        type: String,
        required:true,
        minlength: 8
    },
    Cpassword:{
        type: String,
        required:true,
        minlength: 8
    },
    tokens:[
        {
            token:{
                type:String,
                // required:true
            }
        }
    ],
    carts:Array
})

module.exports=new mongoose.model("user",userSchema)