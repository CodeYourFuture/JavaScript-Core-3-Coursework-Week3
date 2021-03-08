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
NB: The question should refer to line 7

Answer: 
The reason why line 4 (inside the function) and line 7 (outside the function)
are different because let x on line 1 is a global variable, therefore the variable on line 7 
has the same value.

However the syntax declared inside of the function is considered local variables and therefore can only be 
seen if the function is called. In summary the variable x declared on line 4 refers/ assigns the same value to x in the console log
on line 5.

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


console 1 - line 38
This console log will return 10 because the variable outside of the function is global.

console 2 - line 42
The console log on line 42 will return undefined because the f1 function does not return anything.

console 3 - line 43
This console log will return anonymous because it is declared in a local scope in the function and it does not exist. Y is defined inside the scope of the function but the console.log can not reference it.





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
1)The f1 takes a value adds 1 and returns it therefore f1 returns 10.
2) The value of x on line 74 is not changed by the previous call therefore it will explain 9. 

3) line 76 sets y to an object and x is set to 9.
4) line 83 return {x:10} because the function adds 1 to the x property. // function 
5) line 84 displays the object which is set {x:10}




