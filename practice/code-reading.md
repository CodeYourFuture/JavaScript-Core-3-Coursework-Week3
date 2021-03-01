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
// Because we have 2 global and local variables with same name, value of x inside the function will be different to value x declared outside the function.

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

- The first console log will give a value 10 as x is global variable we can use it anywhere, and undefined for the assignment of y, as we didn't use it at all.
- The second console log will error, we are trying to use a local variable outside its scope which is the function.

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

- In the first case x is a constant variable which we can't change it value, so it will remain 9. In the second case y is a object which we can change and updated is properties value, therefore it will be 10.
