const express=require('express');
const bodyParser=require('body-parser');
app=express();

app.post("/",function(req,res){

    let userFirstName= req.query.firstName;
    let UsermiddleName= req.query.middleName;
    let UserLastName= req.query.lastName;

    res.send(userFirstName+" "+UsermiddleName+" "+UserLastName);
})

app.post("/h",function(req,res){

    let UserName= req.header('userName');
    let Password= req.header('Password');

res.send('User Name: '+ UserName +" "+'Password: ' + Password)

})

app.use(bodyParser.json())
app.post("/j",function(req,res){

    let JSONData= req.body;
    // let JSONString= JSON.stringify(JSONData);
    // res.send(JSONString);

    let name= JSONData['name'];
    let capitalCity= JSONData['capitalCity'];
    res.send(name +" "+ capitalCity);


})

app.get("/single",function(req,res){
    res.download("./uploads/photo-1533450718592-29d45635f0a9.jpg");
})

app.listen(5000,()=>{
    console.log("Server Run Success at Port 5000");
})