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

Explain why line 4 and line 6 output different numbers:

Line 5 will output 2, from the variable on line 4, because that variable declared inside the function has a function scope

Line 7 will output 1, from the variable on line 1 -which is a global variable, as it cannot access the variable inside the function

But, in fact, when I tried this code on the compiler, I noticed the code on line 5 wouldn't output anything unless the function was called

And when the function was called, it would output 2

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

Line 36 will output 10, as x is defined globally. Line 40 will output undefined as this function doesn't return anything. Line 41 will be a reference error, as y has a function scope and can only be accessed from inside the function.

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

Line 60 would output 10 if you were to console.log it, whereas line 61 outputs 9. As for line 70, that really tricked me... I would have said that line 70 outputs x: 9 -if you put it inside the console.log, and line 71 outputs 10. However, when passed on the compiler, it printed x: 10 and then I realised that by calling the function f2(y) changes the value of console.log(y) by adding one to it each time you call it

EXPLANATION OF THE OUTCOME: I learnt online that when you pass an object to a function, any changes you make to the object inside the function will be reflected in the original copy.
