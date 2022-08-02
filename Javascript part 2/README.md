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

```
function likes(names) {
  // TODO  
}

```
Solution:
```
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

### Who likes it?

Exercise:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

```
var countBits = function(n) {
  // Program Me
};
```
Solution:
```
var countBits = function(n) {
  return n.toString(2).split("1").length-1;
};
```
<br>

### Who likes it?

Exercise:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

```
var countBits = function(n) {
  // Program Me
};
```
Solution:
```
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

```
function order(words){
  // ...
}
```
Solution:
```
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


