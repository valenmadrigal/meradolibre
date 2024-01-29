const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use( express.static(publicPath));

app.listen(3000,() =>{ 
    console.log('servidor corriendo en el puerto 3000');
    });

    app.get('/',(req,res)=>{
    const pathHome = path.join(__dirname,'views/home.html')
    res.sendFile(pathHome);
}) 
app.get('/login',(req,res)=>{
    const pathLogin =path.join(__dirname,'views/login.html')
    res.sendFile(pathLogin);
})
app.get('/register',(req,res)=>{
    const pathResgister = path.join(__dirname,'views/register.html')
    res.sendFile(pathResgister);
})
