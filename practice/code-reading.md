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
-At line 4, a local variable has been declare and assign a value of 2. Such variable can only being access where they had been declare. Meaning that if I am logging the value of x within that function and later call the the function, I am expecting to get the value of 2.
-At line 7, x will have the value of 1. That is because a global variable has been declare at line 1. Unlike a local variable, a global variable can be access anywhere else in the code.

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
-At line 26 a global variable has been declare (meaning it can be access anywhere). Therefore line 30 will log 10 in the console.
-Line 35 would log, 'y is not defined' to the console. That is because line 31 declare y as a local variable (inside of the function- and it can only be access inside of the function). So the computer does not recognize the value of y being declare, therefore friend 'y is not defined'.
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
-line 48, declared a constant global variable and assign a value of 9 to it.
-line 49 declared a function and passing val as a parameter.
-line 53 and 54 assign the value of x to the parameter val to be 9. so calling this function with return 9;
-line 56, create a new object that have a property x and the value of 9. At line 58 a  new function has been declare. Which have the parameter 'val'.
-Line 59 can also be written using the 'this' method(this.x=this.x+1). Which is use to reference to the value in the object. But since the function had the parameter val passing to it, it would be useful to use the passing parameter (val). 



