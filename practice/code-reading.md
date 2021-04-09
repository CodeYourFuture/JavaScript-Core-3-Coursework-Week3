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
there are two variable with two scope: first is inside of function f1 with value equal 2, second is in global scop  with value equal 1.
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
output: 10, undefined and Error.
when f1 is called by "console.log(f1())" , log value of x(10) because it is declared in global scop and is accessible in f1.
f1 dose not return anything and log "undefined";
"y" is a local variable inside of f1 scope and could not be accessible out side of f1 scop.
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

9
{ x: 10 }

by calling f1 ,add 1 to val's value (not x) and x is not changed.
 by calling f2(y),add 1 to the value of f2's parameter, that is y which store an object by x key.