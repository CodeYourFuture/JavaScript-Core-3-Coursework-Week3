# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;  - global variable
2    function f1()
3    {
4        let x = 2;  - local variable
5        console.log(x);
6    }
7    console.log(x);
8    f1();
```

Explain why line 4 and line 6 output different numbers.

variable "x" on line 1 was declared in global scope. That's why output on for line 7 = 1.

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

Output will be:

10
error `y is not defined`

10 - because the function `f1` just logs global variable `x` to the console.

`y is not defined` - since variable `y` was declared inside the function and can only be accessed from within the function and does not exist in global scope.

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
