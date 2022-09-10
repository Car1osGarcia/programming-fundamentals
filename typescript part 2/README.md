<h1 align="center"> Typescript part 2</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024X576.png" />
</div>

<br>
<br>

# Day 1
##  Declare variable types in TypeScript  
<br>

### boolean
```typescript
let isDone: boolean = false;
```

### number
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
### string
```typescript
let color: string = "blue";
color = 'red';
```
### array
```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```
### Tuple
```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
```

<br>

##  TypeScript Object Type exercise  
<br>

Exercise:
Given the data, define the interface "User" and use it accordingly.

Solution:
```typescript
export interface User{
    name:string,
    age:number,
    occupation:string
}
export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user:User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(element => logPerson(element));
```
<br>

##  TypeScript Object Type exercise  
<br>
Exercise:
Type "Person" is missing, please define it and use
it in persons array and logPerson function in order to fix all the TS errors.

Solution:
```typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = Admin | User;


export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(element => logPerson(element));

```
<br>
<br>

# Day 2
## Training with codewars 
<br>

### Square(n) Sum

Exercise:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

```typescript
export function squareSum(numbers: number[]): number {
  return ;
}
```
Solution:
```typescript
export function squareSum(numbers: number[]): number {
    
  return numbers.reduce((pValue, cValue) => pValue + Math.pow(cValue,2), 0);
}
```
<br>

### A wolf in sheep's clothing

Exercise:
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at detecting.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array.

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

```typescript
export function warnTheSheep(queue: string[]): string {
  return
}
```
Solution:
```typescript
export function warnTheSheep(queue: string[]): string {
  let position:number =queue.length-queue.indexOf("wolf");
  
  return position==1 ? 
    'Pls go away and stop eating my sheep':
    `Oi! Sheep number ${position-1}! You are about to be eaten by a wolf!`;
}
```
<br>

# Day 3
## Training with codewars 
<br>

### A Rule of Divisibility by 13

Exercise:
The whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

Therefore following the method we get:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

```typescript
export function thirt(n: number): number {
  
  return ;
}
```
Solution:
```typescript
export function thirt(n: number): number {
  
  let anterior:number=0;
  let c:number= n.toString().split('').reverse().join('').split('').reduce((pV,cV,i)=> pV + parseInt(cV)* (Math.pow(10,i)% 13) ,0);
  
  while(c!=n){
    n=c;
    c = c.toString().split('').reverse().join('').split('').reduce((pV,cV,i)=> pV + parseInt(cV)* (Math.pow(10,i)% 13) ,0);
  
  }
  
  return c;
}
```
<br>

### Playing with digits

Exercise:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

```typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
        // your code
    }
}
```
Solution:
```typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
       let sP: number= n.toString().split('').reduce((pV,cV,i)=> pV + Math.pow(parseInt(cV),i+p) ,0);
       let result:number= sP/n; 
      
      return Math.round(result)*n==sP? result : -1;
       
    }
}
```
<br>

# Day 4
## Exercise
<br>

### Tile

Exercise:
In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

- Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.
- Write a constructor that takes parameters named letter and value and initializes the instance variables.
- Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).
- Don't worry you don't have to check if the letter is no more than one String length.
You can use this Main class to test your code.

Solution:
```typescript
export default class Tile {
    letter: string;
    value: number;

    constructor(letter: string, value: number) {
        this.letter = letter;
        this.value = value;
    }

    // Accessors

    printTile(): void {
        console.log('==================');
        console.log(`Letter: ${this.letter}`);
        console.log(`Value: ${this.value}`);
        console.log('==================');
    }

}
```
<br>

### Time

Exercise:
You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

- Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second.
- Write a constructor that takes parameters named hour, minute and second and initializes the instance variables.
- Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
- Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).

Solution:
```typescript
export default class Time {
    hour: number;
    minute: number;
    second: number;

    constructor(hour: number, minute: number, second: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // Accessors

    getInSeconds(): number {
        return this.hour*3600 + this.minute*60 + this.second;
    }

    printTime():void{
        console.log('==================');
        console.log(`Hour: ${this.hour}`);
        console.log(`Minutes: ${this.minute}`);
        console.log(`Seconds: ${this.second}`);
        console.log('==================');
    }
}
```
<br>

### Rational

Exercise:
A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.

- Create a new class named Rational. A Rational object should have two number instance variables to store the numerator and denominator.
- Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables.
- Write a method called printRational that prints the object in some reasonable format.
- Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
- Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
- Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.

Solution:
```typescript
export default class Rational {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    printRational():void{
        console.log(`${this.numerator} / ${this.denominator}`);
    }

    invert ():void{
        this.numerator = this.denominator;
        this.denominator = this.numerator;
    }

    toFloat  ():number{
        return this.numerator / this.denominator;
    }

    reduce  ():void{
        let x:number=this.numerator;
        let y:number=this.denominator;

        while(y) {
            let t:number = y;
            y = x % y;
            x = t;
        }

        this.numerator = this.numerator/x;
        this.denominator = this.denominator/x;
    }
}
```
<br>
<br>

# Day 5
## Training with codewars 
<br>

### Growth of a Population

Exercise:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

Example:

nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

```typescript
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
 
}
```
Solution:
```typescript
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
  let years:number=0;
  for(let quantity=p0; quantity<=p;years++){
    quantity+= quantity*(percent/100) +aug;
  }
  return years;
}
```
<br>

### Growth of a Population

Exercise:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

Example:

nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

```typescript
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
 
}
```
Solution:
```typescript
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
  let years:number=0;
  for(let quantity=p0; quantity<p;years++){
    quantity+= Math.trunc(quantity*(percent/100) +aug);
  }
  return years;
}
```
<br>

### Mumbling

Exercise:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

```typescript
export function accum(s: string): string {
  
}
```
Solution:
```typescript
export function accum(s: string): string {
  
  return s.split('').map((letter,i)=> letter.toUpperCase() + letter.repeat(i).toLowerCase() ).join('-');
}
```
<br>

### Valid Braces

Exercise:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

```typescript
export function validBraces(braces: string): boolean {
  //code here
}
```
Solution:
```typescript
export function validBraces(braces: string): boolean {
  let queue: string[]=[];
  for(let i:number =0; i<braces.length ;i++){
    if(braces[i]=='(' || braces[i]=='[' || braces[i]=='{'){
      queue.push(braces[i]);
    }else{
      if(queue.length==0){
        return false;
      }else{
        if((braces[i]==')' && queue[queue.length-1]=='(') || (braces[i]==']' && queue[queue.length-1]=='[') || (braces[i]=='}' && queue[queue.length-1]=='{')){
          queue.pop();
        }else{
          return false;
        }
      }
    }
  }
  return queue.length!=0 ? false : true;
}
```

<br>

### Tic-Tac-Toe

Exercise:
Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

```
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 
 ```

```typescript
// returns index of move
function solveTTT(board) {
 
}
```
Solution:
```typescript
function solveTTT(board) {
  
  if(board[0]=='X' && board[1]=='X' && board[2]==''){
    return 2;
  }else if(board[0]=='' && board[1]=='X' && board[2]=='X'){
    return 0;
  }else if(board[0]=='X' && board[1]=='' && board[2]=='X'){
    return 1;
  }
  
  if(board[3]=='X' && board[4]=='X' && board[5]==''){
    return 5;
  }else if(board[3]=='' && board[4]=='X' && board[5]=='X'){
    return 3;
  }else if(board[3]=='X' && board[4]=='' && board[5]=='X'){
    return 4;
  }
  
  if(board[6]=='X' && board[7]=='X' && board[8]==''){
    return 8;
  }else if(board[6]=='' && board[7]=='X' && board[8]=='X'){
    return 6;
  }else if(board[6]=='X' && board[7]=='' && board[8]=='X'){
    return 7;
  }
  
  if(board[0]=='X' && board[3]=='X' && board[6]==''){
    return 6;
  }else if(board[0]=='' && board[3]=='X' && board[6]=='X'){
    return 0;
  }else if(board[0]=='X' && board[3]=='' && board[6]=='X'){
    return 3;
  }
  
  if(board[1]=='X' && board[4]=='X' && board[7]==''){
    return 7;
  }else if(board[1]=='' && board[4]=='X' && board[7]=='X'){
    return 1;
  }else if(board[1]=='X' && board[4]=='' && board[7]=='X'){
    return 4;
  }
  
  if(board[2]=='X' && board[5]=='X' && board[8]==''){
    return 8;
  }else if(board[2]=='' && board[5]=='X' && board[8]=='X'){
    return 2;
  }else if(board[2]=='X' && board[5]=='' && board[8]=='X'){
    return 5;
  }
  
  
  if(board[0]=='X' && board[4]=='X' && board[8]==''){
    return 8;
  }else if(board[0]=='' && board[4]=='X' && board[8]=='X'){
    return 0;
  }else if(board[0]=='X' && board[4]=='' && board[8]=='X'){
    return 4;
  }
  
  if(board[2]=='X' && board[4]=='X' && board[6]==''){
    return 6;
  }else if(board[2]=='' && board[4]=='X' && board[6]=='X'){
    return 2;
  }else if(board[2]=='X' && board[4]=='' && board[6]=='X'){
    return 4;
  }
  
  let possibleBoard =[];
  board.map((actual,i)=> actual==''? possibleBoard.push(i) : null );
  
  return possibleBoard[0];
}
```

<br>

### Tic-Tac-Toe-like table Generator

Exercise:
Do you have in mind the good old TicTacToe?

Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] you should be returning this structure (inclusive of new lines):
```
 O | X |   
-----------
   | X |   
-----------
 X | O |
```

 Now, to spice up things a bit, we are going to expand our board well beyond a trivial 3 x 3 square and we will accept rectangles of big sizes, still all as a long linear array.

```typescript
function displayBoard(board, width){
  //your code here
}
```
Solution:
```typescript
function displayBoard(board, width){
  //your code here
  let str= "";
  for(let i=0; i<board.length; i=i+width){
    let newBoard=board.slice(i,i+width);
    if(i!=0){
      str+= '\n'+'-'.repeat(width*3+width-1)+'\n'
    }
    str+= ' '+newBoard.join(' | ')+' ';
  }
  return str;
}
```

<br>


