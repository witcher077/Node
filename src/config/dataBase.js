// mongodb+srv://witcher:<Gx7%21mPq9%23Zt4%26vBk>@cluster0.cc60iny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://witcher:<Gx7%21mPq9%23Zt4%26vBk>@cluster0.cc60iny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/devTinder");
}


module.exports = { connectDB };