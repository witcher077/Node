const express = require('express');

const app = express();

// different way to write routes
// "use?r" => usr
// "use*r" => useeklfd;dldkddr
// "use+r" => useeddr
// "u(se)+r" => useseseseddr

app.get('/user', (req, res) => {
    console.log(req.query);
    
    res.send({
        Name: "Ashok Kumar",
        city: "benglore"
    })
})

app.post('/user', (req, res) => {
    res.send("Data saved in DB")
})

app.delete('/user', (req, res) => {
    res.send("User Deleted from DB")
})

app.use('/', (req, res) => {
    res.send("Hello from Node")
})

app.listen(7777, () => {
    console.log("Listening on prt 3000");

})