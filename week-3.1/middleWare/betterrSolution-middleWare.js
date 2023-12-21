

const app = express();

function userMiddleWare(req, res, next){
    if(username != "khalid" && password != "password"){
        res.status(403).json({
            msg : "Incorrect inputs",
        });
    }  else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if(kidneyId != 1  && kidneyId != 2){
        res.status(403).json({
          msg : "enter correct kidney id ",
        });
    }

    app.get('/health-chekup' , userMiddleWare , kidneyMiddleware, function(req,res){
        //doing something shitty !

        res.send("your heart is healthy ! smile ")
    });
}

app.get('/heart-checkup', userMiddleWare, function (req, res){
    
    res.send("your heath is healthy ! ");
}) 