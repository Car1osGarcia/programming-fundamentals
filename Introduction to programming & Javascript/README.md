<h1 align="center"> Introduction to programming & Javascript </h1>
<div align="center">
    <img alt="computer" title="Computer" width="25%" src="https://cdn-icons-png.flaticon.com/512/1802/1802977.png" />
</div>

<br>
<br>

# Day 1
##  Interpreted And Compiled Programming Languages
<br>

### Interpreted programming languages
<p>These types of programming languages are executed while the interpreter is reading the line of code.</p>
<p>Examples of common interpreted languages are PHP, Ruby, Python, and JavaScript.</p>

<br>
<br>

### Compiled programming languages

<p>These types of programming languages are first translated into machine code and then executed.</p>
<p>Examples of pure compiled languages are C, C++, Erlang, Haskell, Rust, and Go.</p>

<br>
<br>

## Pros and cons

|  | compiled        | interpreted   |
| ------------- |:-------------:| -----:|
| Pros    | <p align="justify">1. Compiled into native machine code tend to be faster than interpreted code.   </p> | <p align="justify">1.Interpreted languages tend to be more flexible <br> 2. often offer features like dynamic typing and smaller program size</p> |
| Cons     | <p align="justify">1.Additional time needed to complete the entire compilation step before testing</p>      |   <p align="justify">1.typical execution speed compared to compiled languages.</p>  |

<br>
<br>

## ¿Is java compiled or interpreted?
Java is a high level lenguage that is both compiled and interpreted because source code needs to be compiled into bytecode. Bytecode is a special machine language native to the JVM. The JVM interprets and executes this code at runtime.

<br>
<br>

## Pseudocode that  be used to convert dollars (USD) to bitcoin (BTC)

Assuming the current price is (1$ = 0.000043BTC)
```
1. START
2. Amount <-- GET
3. Bitcoin <-- Amount * 0.000043
4. Result <-- 'The amount ' + Amount + ' is equal to ' + Bitcoin
5. PRINT Result
6. END
```

<br>
<br>

## Low-Level and High-Level Programming Languages
### Low-level
<p>Low-level programs are expressed in terms of the machine operations that must be performed to carry out a task. This provides little or no abstraction. This makes writing programs more difficult, as the algorithm must be specified in terms of the capabilities and specifications of the processor.</p>

### High-level
<p>Are easier to read, write and maintain, developers dont have to worry in secondary things like register or memory management. They are also more independent of a specific computing system arquitecture.</p>

<br>
<br>

# Day 2
## Date of birth in binary
<p>Date of birth: 1999</p>

| 2^10 | 2^9 | 2^8 | 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | 1   | 1   | 1   | 1   | 0   | 0   | 1   | 1   | 1   | 1   |

`Decimal`: 1999 
`Binary`: 11111001011

<br>
<br>

## language of MIPS Assembler 
### Program 1
Program that adds any two given numbers provided by the user

```
  .data
	      number1: .asciiz "\nIngrese el primer numero: "
	      number2: .asciiz "\nIngrese el segundo numero: "
	      result_message: .asciiz "\nEl resultado es: "
  .text
	      main:
              li $v0, 4
              la $a0, number1
              syscall

              li $v0, 5
              syscall

              move $t0, $v0

              li $v0, 4
              la $a0, number2
              syscall

              li $v0, 5
              syscall

              move $t1, $v0
              
              add $t2, $t0, $t1

               li $v0, 4
              la $a0 result_message
              syscall

              li $v0, 1
              move $a0, $t2
              syscall

```
### Program 2
Program that displays my name
```
    .data
	      message: .asciiz "\My name is Carlos Manuel García Escalante "
    .text
	      main:
              li $v0, 4
              la $a0, message
              syscall
```

# Day 3
## Printing even numbers (javascript)

<p>In this exercise i use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100.</p>

```
console.log('Even numbers 0 to 100')
for (let i = 0; i <= 100; i++) {
  if(i%2==0){
    console.log(i)
  }
}

```
<br>

## Bad code
<p>The code shown below is not working in the right way, as a task i found the error made by the developer who programmed this code and correct it</p>

```
var cond = false;

if ((cond = true)) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```
<p>Correct code</p>
If i want to compare i have to use == .

```
var cond = false;

if ((cond == true)) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```
<br>

## Bad code
<p>I must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly</p>

```
var n = 100;

if (n == 100) {
  console.log('This is a special number!');
}
if (n < 1000) {
  console.log('');
} else {
  console.log('Just a regular number');
}
if (n % 10 == 0) {
  console.log('This number is multiple of 10');
}
```
<p>Correct code</p>

```
var n = 10;

if (n == 100) {
  console.log('This is a special number!');
}else if (n < 1000 && n % 10 == 0) {
  console.log('This number is almost special');
} else {
  console.log('Just a regular number');
}
```
