const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Usermodel, todomodel } = require("./db");

mongoose.connect("mongodb+srv://sm1716:OB6M0p7Yr3Goy9fD@cluster0.fci0ktm.mongodb.net/todo-saisakthi")
const app = express(); 
const JWT_SECRET = "sakthi27";
app.use(express.json());//parseing the body { MIDDLEWARE }

app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await Usermodel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"you are logged in"
    })

})

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const user = await Usermodel.findOne({
        email:email,
        password:password
    })
    console.log(user);
    if(user){
        const token = jwt.sign({//provide token to user by jsonwebtoken when user signin it provides token
        
            id:user._id
        },JWT_SECRET);
        
            res.json({
                token:token
            });
        
    }else{
        res.status(403).json({
            message:"incorrect credentials"

        })
        
    }



})

app.post("/todo",auth,async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await todomodel.create({
        title,
        userId,
        done
    })
     res.json({
        userId:userId
     })

});

app.get("/todos",auth,async function(req,res){
        const userId = req.userId;
        const todos = await todomodel.find({
            userId:userId
        })
        res.json({
            todos
        })
});
//Middleware - authentication to tell if users have entered with crt userId if yes next is called
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.user._id;
        next()
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

}

app.listen(3000);