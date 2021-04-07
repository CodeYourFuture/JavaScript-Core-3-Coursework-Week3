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

Line 4 is functionally scoped and can only be accessed within the function block.
Line 6 can only access the value of x from where it is initialised in Line 1 as it has global scope.

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

Line 35 logs 10 to the console because the f1 function is called and can access the value of x because it is globally scoped. It also logs undefined as the function parameters default to undefined.
Line 36 logs an error to the console - Reference Error: y is not defined. This is because y is functionally scoped and it's value can only be accessed from within the function block.

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

Line 57 will log 9 to the console because that is the value of the globally defined variable x. Function f1 returns a value of 10 but is not logged.
Line 67 will log {x: 10} to the console because the x key of the y object is accessed in the f2 function and the value is changed (add 1). The whole object is then logged.
