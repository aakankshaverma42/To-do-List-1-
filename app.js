const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.set('view engine','ejs');
let tasks=[];
let workItems = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
     let options = {
         weekday:"long",
         day:"numeric",
         month:"long"
        };
         let today=new Date();
     let day=today.toLocaleDateString("en-US",options) ;
   res.render("list",{listTitle :day, Newitemlist:tasks});
});
app.get("/about",function(req,res){
    res.render("about");
})
app.post("/",function(req,res){
    
   let task=req.body.Newtask;

   if(req.body.list ==="Work"){
       workItems.push(tasks);
       res.redirect("/work");
   }else{
   tasks.push(task);
    res.redirect("/");
   }
}); 
app.get("/work",function(req,res){
    res.render("list",{listTitle :"Work List",Newitemlist:workItems});
});

// app.post("/work",function(req,res){ 
//     let work=req.body.Newtask;
//     workItems.push(work);
//     res.redirect("/work");
// });
app.listen(3500, function(){
console.log("My server is start working on port 3000");
});

