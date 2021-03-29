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
 - Because line 1 is global variable and line 4 is local variable. Even if they are named same, they only return their own value due to the Javascript scope-based functionality. 

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
- This code gives an error because y is not defined. Variable called "x" is assigned globally and accessible at any time. However, variable called "y" is created inside the function and only accessible inside the function. 

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
- Output will be 9 and { x: 10 }. 9 is the output of variable "x" which is globally created. (Also f1 function returns val which is 10.). In the second output, the value of the variable "y" is changed due to the fact that destructuring is used.   
