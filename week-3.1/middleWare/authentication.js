// using   zod  for the authentication

const express = require ('express');
const zod = require ('zod');
const app = express();

const schema = zod.array(zod.number());

app.get('/healt-checkUp' , (req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "input in invalid"
        })
    } else(
        res.send({
            response
        })
    )
});


app.listen(3000);

