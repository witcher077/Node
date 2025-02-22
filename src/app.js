const express = require('express');
const { connectDB } = require("./config/dataBase");
const User = require("./models/users")

const { AdminAuth, UserAuth } = require("./middlewares/Auth")

const app = express();

app.post("/signup", async (req, res) => {
    const newUser = new User({
        firstName: "Virat",
        lastName: "Kohli",
        email: "vrtk@gmail.com",
        password: "123124",
        gender: "Male"
    })
    try {
        await newUser.save()
        res.send("User Added Successfully")
    } catch (error) {
        res.status(401).send("Somthing went wrong")
    }
   

})


// connection to DB
connectDB().
    then(() => {
        console.log("dataBase Connection Stablished.......")
        app.listen(7777, () => {
            console.log("Listening on prt 3000");

        })
    })
    .catch((err) => {
        console.error(err)
    })




// app.use("/admin", AdminAuth)

// app.get('/admin/getAllUsers', (req, res) => {
//     res.send("All users")
// })

// app.get('/user', UserAuth, (req, res) => {
//     res.send("I am a user")
// })