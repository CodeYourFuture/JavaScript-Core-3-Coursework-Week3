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
Because of the scope, let x = 2 only is able to access inside function.

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


<!-- What will be the output of this code. Explain your answer in 50 words or less.
console.log(f1()) will return 10
console.log(y) undefined because it is only reachable inside the function

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

What will be the output of this code. Explain your answer in 50 words or less. -->

console.log(x) will be 9 because the variable const set the number 9 and will not change

console.log(y) will be {x: 10} because y is an object and we can change what is inside the object
