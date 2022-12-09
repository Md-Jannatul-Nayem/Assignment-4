
const express=require('express');
const multer= require('multer');
const app=express();

var storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){

        cb(null,file.originalname)},
        fileFilter:(req, file, cb)=>{
            if(file.mimetype ==='image/jpg' && file.mimetype==="image/png"){
                cb(null,true);
            }
            else{
                cb(null,false);
            }
          }
})
const upload=multer({
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    }

}).single('image');


app.post("/",function(req,res){
    upload(req,res,function(error){
        if(error){

            res.send("file Uploads Fail")
        }else
        {
            res.send("file Uploads success")

        }
    })
})

app.listen(8000,()=>{
    console.log("Server Run Success at Port 8000");
})
