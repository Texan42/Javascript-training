//eceptions == errors

function referenceError() {
    console.log(x); //temporal dead zone
    let x = 1;
}

try {
      referenceError();
  } 
  catch(err) {
      console.error('cant access x before its declared');
  }


  

// try {
//   //this will show as infinity cuz javascript..  
//     1/0;
// } 
// catch(err) {
//     console.error('divide by 0 error')
// }