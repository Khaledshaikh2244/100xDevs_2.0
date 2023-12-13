// using Async to read from the file 

const fs = require ('fs');

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);

// this is also the Async fucntion
})


console.log("hello from the primary file ") // This is will run First 

