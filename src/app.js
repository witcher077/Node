const express =require('express');

const app =express();

app.use('/hello',(req,res)=>{
res.send("Hello from Node")
})

app.listen(6666,()=>{
console.log("Listening on prt 6666");

})