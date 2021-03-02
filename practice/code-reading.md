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

output x in line 5 is x declared in line 4 [a local variable (scopes) which only accessible within the function f1 ()]
while output x in line 7 is x declared in line 1

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
When console function f1() executed, first output is 10 that is declared by x in global scope, however when console y executed, the output is undefined with reference error, this is because y is declared inside function f1 (local scope), but the execution is outside.
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
Even though val return is 10, however it cannot change x's value because const x's value cannot be changed. Hence x output is 9.
It's different for const y because the declare value is an object property, meaning the object's value for y can be changed. Hence the y output is 10.