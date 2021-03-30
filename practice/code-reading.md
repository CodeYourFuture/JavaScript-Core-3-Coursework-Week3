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
Line 4 prints out function level x, which is 2, line 6 prints out global level x which is 1

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
The output of this code will be 10,undefined then an Reference error.
console.log(x) will print out 10 as x is a global variable.
console.log at the beginning of f1() function call print out undefined as function doesn't have a return.
console.log(y) will cause a reference error as y was in function level but called in global level.

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
The output of this code will be: 9 and {x:10}
f1() function call will return 10 but this won't change x value(9) as x and value are different variables.
f2() function call will take object y as input and changes made in function on the object will affect the object. object y {x:9} will be {x:10} as we change the value in the function. Objects and arrays point a memory address and any value change in that memory address affect the object value.That is the reason why it changes to {x:10}
