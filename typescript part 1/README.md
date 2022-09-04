<h1 align="center"> Typescript part 1</h1>
<h3 align="center"> Introduction</h3>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://wallpaperaccess.com/full/7990034.png" />
</div>

<br>
<br>

# Day 3
##  object-oriented programming vs Functional programming 
<br>

### Definitions
<p> They are programming paradigms. They’re ways of coding that determine the type of tools we’ll have at our disposal and how we’re going to structure the internal architecture of our code.</p>

<p>OOP: The gist of it is that it tries to represent the real world through abstract constructions in your code. Essentially anything “real” about the problem you’re trying to solve can be represented as an object in OOP as well as anything abstract about it (making it easy to handle non-material concepts).</p>
<p>Functional Programming: focuses on behavior alone, in other words: functions. While OOP has the concept of classes and methods, and complex ways of dealing with these structures, functional programming tries to simplify all of this into one basic concept: functions.</p>

<br>

### Differences

| FP        |<p align="center"> OOP  </p>   |
|:-------------:| -----:|
|  <p align="justify">Concept of data and functions as a primary units to describe behavior.   </p> | <p align="justify">Concept of objects as units to describe world </p> |
|  <p align="justify">Considering behavior (functions) as a part of data</p>  |  <p align="justify">Strong separation between data and behavior.</p>  |
|  <p align="justify">Intention to inmutability</p>  |  <p align="justify">Shared mutable state is preserved.</p>  |

<br>
<br>

##  Fundamental Concepts of Object Oriented Programming

### Object
<p align="justify">
A thing from the real world. Objects are instances of classes created with specific data,
</p>

### Abstraction
<p align="justify">
To simply reality. for example if we want to manage workers we have a lot of them with different caracteristics but we can simplify as worker to refer a one of them.
</p>

### Class
<p align="justify">
A template to create objects and we can difine attributes and operations.
</p>

### Encapsultation
<p align="justify">
Hiding data and complexity. Containing information in an object, exposing only selected information
</p>

### Inheritance
<p align="justify">
Child classes can inherit methods and properties from parent class. 
</p>

### Polymorphism
<p align="justify">
Many methods can do the same task.
</p>

<br>
<br>

# Day 4
##  Get started with TypeScript  
<br>

### Definition
TypeScript is an open-source language that was developed by Microsoft. It is a superset of JavaScript, which means that we can continue to use the JavaScript skills we've already developed and add certain features that were previously unavailable.

The core feature of TypeScript is its type system. In TypeScript, you can identify the data type of a variable or parameter by using a type hint. With type hints, you describe the shape of an object, which provides better documentation and allows TypeScript to validate that your code is working correctly.


###  TypeScript usage

- Create Folder

```shell
  $ mkdir <FOLDER_NAME>
```

- Go Into Folder

```shell
  $ cd <FOLDER_NAME>
```

- Get Out Of Folder

```shell
  $ cd ..
```

-  Clean Terminal (Windows)

```shell
  $ cls
```

- Install Node

[Here](https://nodejs.org/en/) is the link to install node

- Check Node Version

```shell
  $ node --version
```

-  Check npm Version

```shell
  $ npm --version
```

-  Start npm Project

```shell
  $ npm init --y
```

- Install Typescript (local)

```shell
  $ npm install typescript
```

-  Compile Typescript File

```shell
  $ npx tsc <FILE_NAME>.ts
```

- Install All Node Packages

```shell
  $ npm install
```

- Node RPL State

```shell
  $ node
```

- Run Javascript File On Node

```shell
  $ node <FILE_NAME>.js
```
<br>
<br>

# Day 5
## Training with codewars 
<br>

### Find the missing letter

Exercise:
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

```javascript
function findMissingLetter(array){
  //Code here
}
```
Solution:
```javascript
function findMissingLetter(array)
{  
  return String.fromCharCode(
    array.find(
      (letter, i)=>(i!=0 && (letter.charCodeAt()-array[i-1].charCodeAt()>1)))
    .charCodeAt()-1);
}
```
<br>

### Reverse or rotate?

Exercise:
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

```javascript
function revrot(str, sz){
  //Code here
}
```
Solution:
```javascript
function revrot(str, sz) {
  if (sz<=0 || str.length==0 || sz > str.length) return '';
  
  return str.match(RegExp('.{1,'+sz+'}','g'))
        .map(chunk => (
        chunk.length<sz ? '': 
        chunk.split('').reduce(
        (previousValue, currentValue) => previousValue + Math.pow(parseInt(currentValue), 3),0)
        %2==0 
        ? chunk.split('').reverse().join('') 
        : chunk.split('').map((i,j)=>(j!=0? i:'')).join('')+ chunk.split('')[0])
        ).join('') ;
}
```
<br>

### What's Your Poison?

Exercise:
The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible.

However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rats, until exactly 24 hours later when the infected rats suddenly die. The King needs to determine which bottle of wine is poisoned by tomorrow, so that the festivities can continue as planned.

Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.

Your Task
You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.

```javascript
function find(rats) {
    // return number of poisoned bottle
}
```
Solution:
```javascript
function find(rats) {
    rats.sort();
    let binary='';
    let j=0;
    for(let i =0; i<10; i++){
      if(rats[j]==i){
        binary+='1';
        j++;
      }else{
        binary+='0'
      }
    }
  return parseInt(binary.split('').reverse().join(''),2);
  
}
```
<br>

### Array.diff

Exercise:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

```javascript
function arrayDiff(a, b) {
  
}
```
Solution:
```javascript
function arrayDiff(a, b) {
  let newArray=[];
  let exist=false;
  for(let i =0; i<a.length; i++){
    exist=false;
    for(let j=0; j<b.length; j++){
      if(a[i]===b[j]){
        exist=true;
      }
    }
    if(!exist){
      newArray.push(a[i]);
    }
  }
  return newArray;
}
```
<br>



