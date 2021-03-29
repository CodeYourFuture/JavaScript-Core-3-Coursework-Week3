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

Explain why line 4 and line 6 output different numbers.
ANSWER
-----------------
one of x is defined outside of the function and another one inside the function that's why output is different 


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
------
ANSWER
we will get the output for the first one is 10 because we can access any value outside of the function
however for the second console.log answer gonna be undefined because we can not access the value inside of the function.
-----
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);    =>>  this return val 10 and it does not change x's value
console.log(x); =>> answer is 9 because we could not modified the x it is still 9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y); this call return {x: 10}  I believe that once we access the object value we are able to modified x's value it seems different than above example.
console.log(y); {x: 10} y was assigned an object before we call the function and it returned object after we call however we were able to change the value of x.
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer
I have written my answer just after function call and console.log()