<h1 align="center"> Typescript part 4</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024X576.png" />
</div>

<br>
<br>

# Day 1
##  Resume  Object-Oriented Programming
<br>

### Abstraction
<p align="justify">
To simply reality. for example if we want to manage workers we have a lot of them with different caracteristics but we can simplify as worker to refer a one of them.
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

# Day 2
##  parameters
### Required paremeters
All function parameters are required, unless otherwise specified, and the number of arguments passed to a function must match the number of required parameters the function expects.

### Optional parameters
You can also define optional parameters by appending a question mark (?) to the end of the parameter name.
The optional parameter must come after any required parameters in the parameter list. 

### Default parameters
You can also assign default values to optional parameters. If a value is passed as an argument to the optional parameter, that value will be assigned to it. 

### Rest Parameters
If you want to work with multiple parameters as a group (in an array) or don't know how many parameters a function will ultimately take, you can use rest parameters. Rest parameters are treated as a boundless number of optional parameters. You may leave them off or have as many as you want.


## typed functions
You can define function types and then use them in your functions. This is useful if you want to apply the same function type signature to more than one function.

You can define a function type using a type alias or an interface. Both approaches work essentially the same so it's up to you to decide which is best. An interface is a better if you want to have the option of extending the function type. A type alias is better if you want to use unions or tuples.

## Abstract classes
Abstract classes are like a mixture of implementing interfaces and extending a class in one step. You can create a class with optional methods and properties, but also indicate which methods and properties must be implemented in the derived class.

### abstract classes vs interfaces
An abstract class allows you to create functionality that subclasses can implement or override. An interface only allows you to define functionality, not implement it. And whereas a class can extend only one abstract class, it can take advantage of multiple interfaces. 

<br>

# Day 3
## Training with codewars 
<br>

### Make the Deadfish Swim

Exercise:
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

- i increments the value (initially 0)
- d decrements the value
- s squares the value
- o outputs the value into the return array

Invalid characters should be ignored.

```typescript
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  
}
```
Solution:
```typescript
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let newArray:number[]=[];
  let num: number = 0;
  for(let i:number=0; i<data.length ;i++){
    switch(data[i]){
    case 'i':
      num++;
    break;
    case 'd':
      num--;
    break;
    case 's':
      num=num*num;
    break;
    case 'o':
      newArray.push(num);
    break;
    }
  }
  
  return newArray;
}
```
<br>

### Duplicate Encoder

Exercise:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

```typescript
export function duplicateEncode(word: string){
  
}
```
Solution:
```typescript
export function duplicateEncode(word: string){
  word=word.toLowerCase()
  let out:string='';
  
  for(let i:number=0; i<word.length; i++){
    let salto:boolean=false;
    for(let j:number=0; j<word.length; j++){
      if(i!==j){
        if(word[i]==word[j]){
          out+= ')';
          salto=true;
          break;
        }
      }
    }
    if(!salto){
      out+='(';
    }
  }
  
  return out;
}
```
<br>

### Find the odd int

Exercise:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

```typescript
export const findOdd = (xs: number[]): number => {
  // happy coding!
  return 0;
};

```
Solution:
```typescript
export const findOdd = (xs: number[]): number => {
  
  for(let i:number=0; i<xs.length; i++){
    var idx = xs.indexOf(xs[i]);
    let times:number=0;
    while (idx != -1) {
      times++;
      idx = xs.indexOf(xs[i], idx + 1);
    }
    if(times%2!=0){
      return xs[i];
    }
  }
  
  return 0;
};
```
<br>

### Which are in?

Exercise:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

```typescript
export function inArray(a1: string[], a2: string[]): string[] {
  throw new Error('TODO')
}

```
Solution:
```typescript
export function inArray(a1: string[], a2: string[]): string[] {
  let newArray:string[]= [];
  for(let word1 of a1){
    let exist:any =a2.find(word2 => word2.includes(word1));
    if(!!exist){
      newArray.push(word1);
    }
  }
  
  return newArray.sort();
}
```
<br>

# Day 4
## Generics in typescript
<br>

### What are generics?
Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.

### Why use generics?
We can use any to create a function to accept any type but we are loosing the power behind the TypeScript type checking system. So we can create generics to keep this type checking system.

## Generics exercise
We have just learn about generics, an we where creating our own implementation for the Linkedlist structure, but it is incomplete, you task is to finish the missing methods.

addFirst: Adds a new node at the start of the structure
removeLast: Removes the last node of the structure

Initial exercise:

```typescript
import Node from './Node';

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  public add(value: T): void {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }  

  public toString(): string {
    if (this.head === null) return '[]';
    let representation = '';
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.value)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.value)}`;
    representation = `[${representation}]`;
    return representation;
  }
}
```

Solution:
```typescript
import Node from './Node';

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  public add(value: T): void {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }  

  public addFirst(value: T):void{
    if(this.head==null){
        this.head=new Node(value);
    }else{
        let node = this.head.next;
        this.head= new Node(value);
        this.head.next= node;
        this.length++;
    }
  }

  public removeLast(): void {
    if (this.head !== null) {
      let node = this.head;
      let prev: Node<T> = node;
      while (node.next !== null) {
        prev = node;
        node = node.next;
      }
      prev.next = null;
      this.length--;
    }
  }

  public toString(): string {
    if (this.head === null) return '[]';
    let representation = '';
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.value)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.value)}`;
    representation = `[${representation}]`;
    return representation;
  }
}
```