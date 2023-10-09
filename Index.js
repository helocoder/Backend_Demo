require ('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("chai aur hellocoder")
})

app.get('/twitter',(req,res)=>{
    res.send('www.youtube.com')

})

app.get('/login',(req,res)=>{
    res.send("login");
})

app.get('/chai',(req,res)=>{
     res.send("Chai aur code");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
