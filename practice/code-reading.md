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
 "x" on line 1 has been defined as a global variable. This "x" been consoled on line 7(output = 1)
 "x" on line 4 has been defined inside the function, hence it's a local variable. This "x" been consoled on line 7(output = 2)
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
"x"  been defined as a global variable so when we call it inside the function in will be consoled(output = 10).
 "y"  has been defined inside the function, hence it's a local variable. When we try to console it outside the function we'll get an error( y will be undefined).
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
On line 55 the default number for x has been defined(9). Therefor on line 53 output would be 9. On line 63 we console y and since y is an object equal to "x+1" the second console would be {x:10}