
function findSum(n){
  let ans = 0;

  for (let i = 0 ; i< n; i++){
    ans+=i;

  }
  return ans;
}

 function findsumTill100(){
    console.log( findSum(100) );

 }
  setTimeout(findsumTill100,2000);   //  setTimeout(findsumTill100(1000)) what is the isuue ?
                                      //  why The "callback" argument must be of type function. Received type number (100)
  console.log("Helloo world !");
 