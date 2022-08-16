<h1 align="center"> Javascript part 1</h1>
<div align="center">
    <img alt="computer" title="Computer" width="25%" src="https://cdn-icons-png.flaticon.com/512/1802/1802977.png" />
</div>
<br>
<br>

# Day 1
##  Statements 
<br>

### If..Else
<p>This is a control flow statement that is used to change the flow if a condition is truthy or falsy. If the condition is truthy do some specific statement else do another diferent statement.</p>

Syntax with an else clause

```javascript
if (condition)
  statement1
else
  statement2
```
example with a truthy condition:

```javascript
let result;
let a =2;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
}
console.log(result);


Result:
    positive
```
<br>

### for

<p>This statement creates a loop that repeat other statement, to do this we have three optional expressions: inizialization, condition and final expression.</p>

- In the inizialization we could type a new variable.
- In the condition we could specify how many times we want that the loop repeat (a limit).
- In final expression we could type a counter or expression that executes each iteration.

Syntax:
```javascript
for ([initialization]; [condition]; [final-expression])
  statement
```

Example:
```javascript
for (let i = 0; i < 4; i++) {
  console.log(i);
  // more statements
}
```
Result:
```
0
1
2
3
```

### while
<p>This statement creates a loop but it only needs a condition to continue iterating if is truthy.</p>

Syntax:
```javascript
while (condition)
  statement
```
Example:
```javascript
let n = 0;

while (n < 4) {
  console.log(n);
  n++;
}
```
Result:
```
0
1
2
3
```
<br>

### function
<p>This statement allows separate specific statement to call the function every time we need the statement beign executed.</p>

Syntax:
```javascript
function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```
Example:
```javascript
function calcMult(num1, num2) {
  return num1 * num2;
}

console.log(calcMult(4, 6));

```
Result:
```
24
```


# Day 2
## Training with codewars

### create an account
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="codewars0.jpg" />
</div>

<br>

### Multiply exercise
Exercise:

```javascript
function multiply(a, b){
  a * b
}

```
Solution:
```javascript
function multiply(a, b){
 return a * b
}
```

### ASCII Total exercise
Exercise:
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

```javascript
function uniTotal (string) {
// total up dem unicodes!
}

```
Solution:
```javascript
function uniTotal (string) {
  let suma=0;
  for (let i = 0; i < string.length; i++) {
    suma = suma + string.charCodeAt(i);
  }
  return suma;
}
```
<br>

# Day 3
## Training with codewars

### Char From ASCII Value

Exercise:
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

```javascript
function getChar(c){
  // ...
}
```

Solution:
```javascript
function getChar(c){
  return String.fromCharCode(c)
}
```

### Binary Addition

Exercise:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
```javascript
function addBinary(a,b) {

}
```

Solution:
```javascript
function addBinary(a,b) {
  let sum=a+b;
  let strSum= sum.toString(2);
  return strSum
}
```
### Student's Final Grade

Exercise:
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

- 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
- 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
- 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
- 0, in other cases

```javascript
function finalGrade (exam, projects) {
  return // final grade
}
```

Solution:
```javascript
function finalGrade (exam, projects) {
  if(exam > 90 || projects>10){
    return 100;
  }else if(exam > 75 && projects>=5){
    return 90;
  }else if(exam > 50 && projects>=2){
    return 75;
  }else{
    return 0;
  } 
}
```
<br>

# Day 4
## Training with codewars
### Remove all exclamation marks from the end of sentence

Exercise:
Remove all exclamation marks from the end of sentence.

```javascript
function remove (string) {  
  return '';
}
```

Solution:
```javascript
function remove (string) { 
  for(let i=string.length; i>0; i-- ){
    if(string.charAt(i-1)==='!'){
      string= string.substr(0,string.length-1);
    }else{
      return string;
    }
  }
}
```
### Vowel Remover
Exercise:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

```javascript
function shortcut (string) {
  return '';
}
```

Solution:
```javascript
function shortcut (string) {
  string=string.replace(/a/g, '');
  string=string.replace(/e/g, '');
  string=string.replace(/i/g, '');
  string=string.replace(/o/g, '');
  string=string.replace(/u/g, '');
 
  return string;
}
```

### Rock Paper Scissors!
Exercise:
Let's play! You have to return which player won! In case of a draw return Draw!.

```javascript
const rps = (p1, p2) => {
};
```

Solution:
```javascript
const rps = (p1, p2) => {
  if((p1=='rock' && p2=='scissors' ) || (!(p1=='scissors' && p2=='rock') && p1.length > p2.length)){
    return "Player 1 won!";
  }else if((p2=='rock' && p1=='scissors' ) || (!(p2=='scissors' && p1=='rock')  && p2.length > p1.length)){
    return "Player 2 won!";
  }else{
    return "Draw!";
  }
};
```
<br>

### Persistent Bugger
Exercise:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

```javascript
function persistence(num) {
   //code me
}
```

Solution:
```javascript
let sum = 1;

function persistence(num) {
  let dig = num.toString();
  
   if(dig.length==1){
     return 0;
   }else{
     sum=dig;
     let count=0;
     while(sum>=10){
        dig = sum.toString();
        const myArray = dig.split("");
        sum = 1;
        myArray.forEach(multiply);
        count++;
     }
     return count;
   }
}

function multiply(item) {
  sum = sum * parseInt(item);
}
```
<br>

# Extra Day
## Training with codewars
### Holiday VIII - Duty Free
Exercise:
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

```javascript
function dutyFree(normPrice, discount, hol){

}
```

Solution:
```javascript
function dutyFree(normPrice, discount, hol){
  let percentage= normPrice* (discount/100);
  return Math.floor(hol/percentage);
}
```

<br>

### Twice as old
Exercise:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
}
```

Solution:
```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld-2*sonYearsOld)
}
```
<br>

### Valid Spacing
Exercise:
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

```javascript
function validSpacing(s) {
  // write your code here
}
```

Solution:
```javascript
function validSpacing(s) {
  let myArray = s.split(" ");
  if(s==''){
    return true;
  }
  
  for(let n=0; n<myArray.length; n++){
    if(myArray[n]==""){
      return false;
    }
  }
  return true;  
}
```

<br>

### Fake Binary
Exercise:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

```javascript
function fakeBin(x){

}
```

Solution:
```javascript
function fakeBin(x){
  x=x.replace(/1|2|3|4/g, '0')
  x=x.replace(/5|6|7|8|9/g, '1')
  return x
}
```