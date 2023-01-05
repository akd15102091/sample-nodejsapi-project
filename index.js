const express = require("express");
const app = express();
let port = process.env.PORT || 3000 ;
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.post('/process_post', urlencodedParser, function (req, res) {  
    response = req.body;  
    res.end(response);  
 })  

app.listen(port, ()=> {
    console.log(`Example app is listening on port ${port}`);
})