# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1() 
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```
// because line 4 is inside a function and we did not invoke the function first line in in global scope.


Explain why line 4 and line 6 output different numbers.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.


// out put is 10 because here we are console y but y in in local scope of f1 function hence we can not access it but x in in global scope so we can access that. if we want value of y then first we need to console it inside function then invoke the function to see the result of y there no way we can access y from outside.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

// first out put is 9 because x is in global scope and on line 56 we printed it to console.
// second out put will be object {x:10} because we assign variable y to an object {x:9}. in function f2() we assign parameter of val then when we invoke function f2() with y parameter val become y. val.x +1 is like we say 9 + 1 because y holds value of {x: 9}  in global scope.