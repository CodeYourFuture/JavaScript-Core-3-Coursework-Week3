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

Explain why line 4 and line 7 output different numbers.

Because in line 4 let x variable is local scope variable and it is in the function.It will show 2 as output. But x which is in line 7 is global scope variable and will show 1 as output.

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

Due to let x = 10 is global scope in line 30 console.log will show 10 as output. Also in line 35 will show "reference error:y is not defined" because of let y is a local scope variable, it is defined only in the function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);//10
console.log(x); //9 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);//10
console.log(y);//9
```

What will be the output of this code. Explain your answer in 50 words or less.

In line 55 function will return 10, but x is constant variable and it can not be changed. x output is 9. Although y is created as global scope we will use it in f2(y) function. And function will return { x: 9 + 1 = 10 } object and console.log will show new assignment as y = { x: 10 }

