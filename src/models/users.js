const mongoose = require('mongoose');
var validator = require('validator');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            const isValid= validator.isEmail(value)
            if(!isValid)
             throw new Error("not a valid Email");        }

    },
    password: {
        type: String,
        required:true,
        validate(value) {
            const isValid= validator.isStrongPassword(value)
            if(!isValid)
             throw new Error("not a valid Password");
             
         }
    },
    gender: {
        type: String,
        validate(value) {
            if (!["Male", "Female", "Other"].includes(value)) {
                throw new Error("Not a valid gender");

            }
        }
    },
    age: {
        type: String,
        min: 18
    },
    about: {
        type: String,
        default: "this is default info of the User"

    },
    intrest:{
        type:Array,
        default:["Nature"]
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        validate(value) {
           const isValid= validator.isURL(value)
           if(!isValid)
            throw new Error("not a valid image");
            
        }
    },

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);
// module.ecports = User;