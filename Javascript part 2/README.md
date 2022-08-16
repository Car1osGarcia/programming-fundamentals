<h1 align="center"> Javascript part 2</h1>
<div align="center">
    <img alt="computer" title="Computer" width="25%" src="https://cdn-icons-png.flaticon.com/512/1802/1802977.png" />
</div>
<br>
<br>

# Day 1
## Training with codewars 
<br>

### Who likes it?

Exercise:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```javascript
function likes(names) {
  // TODO  
}

```
Solution:
```javascript
function likes(names) {
  let str=''
  if(names.length==0){
    return 'no one likes this';
  }else if(names.length==1){
    return names[0]+' likes this';
  }else  if(names.length==2){
    return names[0]+' and '+names[1]+' like this';
  }else if(names.length==3){
    return names[0]+', '+names[1]+' and '+names[2]+' like this';
  }else{
    return names[0]+', '+names[1]+' and '+(names.length-2) +' others like this';
  }
  
}
```

<br>

### Bit Counting

Exercise:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

```javascript
var countBits = function(n) {
  // Program Me
};
```
Solution:
```javascript
var countBits = function(n) {
  return n.toString(2).split("1").length-1;
};
```
<br>


### Your order, please

Exercise:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

```javascript
function order(words){
  // ...
}
```
Solution:
```javascript
function order(words){
  if(words.length==0){
    return  "";
  }else{
    let word = words.split(" ");
    let sentence="";
    let j=1;
    let i=0;
    for(; word.length!=1;i++ ){
      if(word[i].includes(j.toString())){    
        sentence+=word[i]+' ';
        word.splice(i, 1);
        j++;
        i=-1;
      }
    }
    return sentence+word[i];
  }
}
```
<br>

# Day 2
## Training with codewars 
<br>

### Simple Pig Latin

Exercise:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

```javascript
function pigIt(str){
  //Code here
}
```
Solution:
```javascript
function pigIt(str){
  let words= str.split(" ");
  let sentence='';
  let i=0
  console.log(str);
  for(; i<words.length-1; i++){
    if(words[i].match('^[a-zA-Z]+$')){
      sentence += words[i].substr(1,words[i].length)+words[i][0]+'ay ';
    }else{
      sentence += words[i];
    }
  }
  if(words[i].match('^[a-zA-Z]+$')){
      sentence += words[i].substr(1,words[i].length)+words[i][0]+'ay';
  }else{
      sentence += words[i];
  }
  return sentence;
}
```
<br>

### Count the number of Duplicates

Exercise:
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

```javascript
function duplicateCount(text){
  //...
}
```
Solution:
```javascript
function duplicateCount(text){
  let txt = text.toLowerCase();
  let con=0;
  for(let i=0; i<txt.length; i++){
    let letter= txt.charAt(i);
    txt=txt.replace(letter, '');
    if(txt.includes(letter)){
      var re = new RegExp(letter,"g");
      txt=txt.replace(re, ''); 
      con++;
      i=0;
    }
    
  }
  return con;
}
```

<br>

### Decode The Morse Code

Exercise:
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

```
decodeMorse = function(morseCode){
  //your code here
}
```
Solution:
```
decodeMorse = function(morseCode){

  return morseCode
          .trim()
          .split("   ")
          .map( word =>  word
               .split(" ") 
               .map(character => MORSE_CODE[character]) 
               .join('')             
          ).join(' ')
           
}
```

# Day 3
## Training with codewars 
<br>

### Valid Parentheses

Exercise:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

```
function validParentheses(parens) {
  
}
```
Solution:
```
function validParentheses(parens) {
  let array=[];
  for(let h=0; h<parens.length ;h++){
    if(parens.charAt(h)===")" && array.length==0){
      return false;
    }else{
      parens.charAt(h)==="(" ? array.push(".") : array.pop() 
    }
  }
  return array.length==0 ?  true :  false
}
```

<br>

### Convert string to camel case

Exercise:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

```
function toCamelCase(str){     
}
```
Solution:
```
function toCamelCase(str){
  let word = str.split(/[-|_]/);
  return word.map((w,i) =>{ 
           return i==0 ? w.substr(0,w.length) : w.substr(0,1).toUpperCase()+w.substr(1,w.length); 
          }).join('');
     
}
```

<br>

### Unique In Order

Exercise:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

```
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
}
```
Solution:
```
var uniqueInOrder=function(iterable){
  let array = typeof iterable=='string' ? iterable.split(''): iterable;
  return array.filter((a,i)=> {return a!=array[i-1] ? a :null ; });
}
```
<br>

# Day 3
## Training with codewars 
<br>

### Fold an array

Exercise:
In this kata you have to write a method that folds a given array of integers by the middle x-times.

```
function foldArray(array, runs)
{
}
```
Solution:
```
function foldArray(array, runs)
{
  for(let i=0;i<runs; i++){
    if(array.length%2==0){
      let arrayN1=array.slice(0,(array.length/2));
      let arrayN2=array.slice((array.length/2),array.length);
      array=arrayN1.map((n,i)=>n+arrayN2[(arrayN2.length-i)-1]);
    }else{
      let arrayN1=array.slice(0,((array.length-1)/2));
      let arrayN3=array[((array.length-1)/2)];
      let arrayN2=array.slice((array.length/2)+1,array.length);
      array=arrayN1.map((n,i)=>n+arrayN2[(arrayN2.length-i)-1]);
      array.push(arrayN3);
    }
  }
  
  return array;
}
```

<br>

### Encrypt this!

Exercise:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

```
var encryptThis = function(text) {
  // Implement me! :)
}
```
Solution:
```
var encryptThis = function(text) {
  return text.split(" ").map(a=>a.length==1?a.charCodeAt(0):a.length==2?a.charCodeAt(0)+a[1]:a.charCodeAt(0)+`${a[a.length-1]+a.substr(2,a.length-3)+a[1]}`).join(' ');
}
```
<br>

# :dart: Mission Statement

I am a science and systems engineering student who has completed courses and is in the process of graduating from Universidad de San Carlos de Guatemala. During my studies I have developed web pages with different frameworks, using DevOps practices such as agile methodologies, Microservices, CI and CD; I have carried out projects implementing different services with cloud service providers such as AWS, Google Cloud and Digital Ocean; I have knowledge about networking, software architecture patterns and IOT. I want to be a full stack developer learning the most demanded technologies in the market. I am a dedicated person who likes to learn about new tools in the world of technology.