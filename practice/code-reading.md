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
- In line 4 x is function level variable and output is 2, in line 6 x is defined global scoped and output is 1.

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
- The output of this code will be:
 10
 undefined
- x is defined as a global variable and when we consoled (f1()) the output will be 10.
- y is defined inside the function and when we consoled y outside the function we will get an error "y is not defined".  


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
- The output will be:
9
{ x: 10 }
- Although f1(x) will return 10, x will stays same (9) because x is a constant and cannot be changed.
- The function f2(y) will return {x:10} because y is an object and object property can be changed.

