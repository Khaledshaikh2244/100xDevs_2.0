const express = require ("express");

const app = express();

app.get("/health-checkup",  (req,res)=> {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId  =req.query.kidneyId;

    if(username != "username" || password != "password"){
        res.status(400).json({
            msg: "Invalid username or passoword"
        });
    
        if(kidneyId != 1 && kidneyId !=2 ){
            res.status(400).json({"msg" : "something is wrong about the id"});
        } 

        res.json({msg : "your kidney is Fine !"})
    }
});

app.listen(3000);