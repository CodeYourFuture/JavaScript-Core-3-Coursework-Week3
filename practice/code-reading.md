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

Line 5 is within a function so it prints x as defined within the function (value = 2).
Line 7 does not have access to code within the function, so it prints x as defined in line 1 (value = 1)

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

The code will first print 10 (the output of f1), because x is defined outside of the function so it can be accessed by it.
Then it will throw an error, because y is only defined within f1 and the command cannot access it.

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

f1 returns 9 because x is defined as a constant and cannot be changed.
f2 returns an object with the property x = 10, because an object property can be modified.
