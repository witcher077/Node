const express = require('express');
const { connectDB } = require("./config/dataBase");
const User = require("./models/users")

const { AdminAuth, UserAuth } = require("./middlewares/Auth");
const { Model } = require('mongoose');

const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
    const newUser = new User(req.body)
    const isAlreadyPresent= await User.findOne(newUser.email)
    try {
        if (isAlreadyPresent.length=== 0 && newUser && newUser.intrest.length < 10) {
            await newUser.save()
            res.send("User Added Successfully")
        }
        else {
            res.send("Enter info in correct form");
        }

    } catch (error) {
        res.status(401).send("Somthing went wrong")
    }

})

app.get("/user", async (req, res) => {
    const email = req.body;

    try {
        const user = await User.findOne(email)
        res.send(user)

    } catch (error) {
        res.status(401).send("Somthing went wrong")
    }
})

app.get("/feed", async (req, res) => {

    try {
        const users = await User.find()
        if (users.length === 0) {
            res.send("No user Found")
        }
        else {
            res.send(users)
        }
    } catch (error) {
        res.status(401).send("Somthing went wrong")

    }

})
app.patch("/user", async (req, res) => {
    const { Id } = req.body;
    const data = req.body;

    console.log(data);

    try {
        const UPDATEABLE_FIELDS = ['_id', 'firstName', 'lastName', "age", "intrest", "about", "image"]

        let isUpdateAllowed = Object.keys(data).every((key) => UPDATEABLE_FIELDS.includes(key))

        if (isUpdateAllowed) {
            if(data.intrest){
                if(data.intrest.length<10){
                    await User.findOneAndUpdate(Id, data);
                    res.send("user updated successfully")
                }
                
            }
            await User.findOneAndUpdate(Id, data);
            res.send("user updated successfully")
            
        }
        else {
            throw new Error("Not allowed to update");

        }
    } catch (error) {
        res.status(401).send(error)

    }
})

app.delete("/user", async (req, res) => {
    const email = req.body;
    const user = User.find(email)
    try {
        if (user) {

        }
        else {
            res.send("User not found")
        }
    } catch (error) {

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