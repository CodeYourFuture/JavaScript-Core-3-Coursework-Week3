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

Answer:
Because the variables, though named the same, are declared on different scopes using the "let" keyword. The "let" keyword limits the scope of a variable to the block of code wherein it is declared.
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

Answer: 
10 (line 34) and undefined (line 35).
The reason for that is because variable x is globally accessible (and declared only onec). Variable y, on the other hand, has a scope limited to the function, and it's not accessible for logging its value outside this block. 
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

Answer:
9 (line 56), because x is a premitive data type and is declared as a constant, so its value never changes.
{x: 10} (line 66). Although y is declared as a constant, it's an object. As such, we can modify its properties without the object changing its identity.