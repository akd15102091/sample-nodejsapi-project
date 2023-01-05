const express = require("express");
const app = express();
let port = process.env.PORT || 3000 ;
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.post('/process_post', function (req, res) {  
    let response = req.body; 
    console.log("response is : ",response); 
    console.log("request is :",req);
    res.send(JSON.stringify(response));
 })  

app.listen(port, ()=> {
    console.log(`Example app is listening on port ${port}`);
})