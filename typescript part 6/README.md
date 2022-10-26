<h1 align="center"> Typescript part 6</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png" />
</div>

<br>
<br>

# Day 3
## What Is React? 
### It is a javascript library for building fast user interfaces

## What Is a component in React? 
### It is a peace of UI 

## How react works?
### React manage a virtual DOM that keeps a lightweigth representation of the DOM in memory.

<br>
<br>

# Day 4
## Training with codewars 
<br>

### Easter egg list in ReactJS

Exercise:
You decide to create a simple list of your favourite Easter eggs in React.

Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

```typescript
import React from 'react';

export const EggList = (props) => {
  
};

export const EasterEgg = (props) => {
 
};
```
Solution:
```typescript
import React from 'react';

export const EggList = (props) => {
  const eggLis = props.eggs;
  
  return (
     <ul>
    {
      eggLis.map((egg,key)=> 
       
          <EasterEgg key={key} name={egg} />           
        
      )
    
    }
    </ul>
  );
};

export const EasterEgg = (props) => {
  return (
    <li key={props.key}>{props.name}</li>
  )
};
```


