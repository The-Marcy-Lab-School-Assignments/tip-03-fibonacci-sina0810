// Prints the first n Fibonacci numbers
/*
a = 0 
b= 1
next = b (becasue we want to start with next number with is going to be b)
a+b = next



*/


const printFibonacci = (n) => {
  let a = 0
  let b = 1
  // maybe let i to start with 2 
  for (let i = 0; i < n; i++) {
    console.log(a)
    let next = a + b // add the current to number, to get the next number
    a = b; // store the value b into the variable a 
    b = next // store the value of next into the verabile b
  }
}
console.log('example 1')
printFibonacci(5);  // should print 0, 1, 1, 2, 3
console.log('example 2')

printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
