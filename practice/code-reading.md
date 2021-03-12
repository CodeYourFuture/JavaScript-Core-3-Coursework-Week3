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
line dispalys the value of the local variable x which is declared withing function f1. And line 6 displays the value of the global variable declared in line 1.

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
The line console.log(f1()), will display the following two lines:
10
undefined
It will display 10 because of console.log(x), and display "undefined" because the function f1 does not return any value.
The line console.log(y), will give an error, because "y" is a local variable of function f1() and does not exist outside.

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
The output will be:
9
{ x: 10 }
In first case the value of "x" is not changed because it is passed by value to the function f1. The function does not modify the value of the parameter that is passed.
In second case the object is passed as a parameter, and the object is always passed by reference. That means, if the object is changed in the function, the original object gets modified as well.
