

// 

const user = {
    username : "jackSparrow",
    price : 1999,

    welconmeMessage: function(){
        console.log(`${this.username}`, "welcome here ! ");
        // console.log(this);
    } ,
    
}

// user.welconmeMessage();
// user.username = "hkirat singh ";
// user.welconmeMessage();


// console.log(this); // this is represent empty one try this in Browser 
                


const ArrowFunction = () => {
    let username = "kiraat" 
    console.log(this);
}

ArrowFunction();


const Add = (num1 , num20) => {
    return num1 + num20;
}

console.log(Add(1,5));


//Implicit return

const addTwo = (num1 , num2) => num1 + num2;
const addTWO = (num1 , num2) =>( {username : "Rokeee "}); // objext must be Wrapp in () to be retunr :-

console.log(addTwo(3,3), "from Implicit Arrow function");
console.log(addTWO(1,2));




