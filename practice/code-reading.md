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

- Because the first variable (let x = 1) been declared in global scope, while the second variable (let x = 2)been declared in a function scope.

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

- The output will be 10 and them undefined. That's because variable x been declared in global scope so it will be accessible in function f1, but variable y been declared in function scope, so it won't be accessible out of our function.

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

- The output will 9. That's because variable x declared in global scope and in the function scope number 1 will be added to our variable, so function f1 returns 10. console.log prints 9.

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

- The output will be { x: 10 }. Because, however variable y has been declared in global scope, but it stores an object in it and function f2 returns the value of x to 10 in the object. console.log returns { x: 10 }
