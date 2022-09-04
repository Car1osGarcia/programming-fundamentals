<h1 align="center"> Typescript part 3</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png" />
</div>

<br>
<br>

# Day 1
##  OOP Glossary  
<br>

### 1. Abstraction
<p align="justify">
To simply reality. for example if we want to manage workers we have a lot of them with different caracteristics but we can simplify as worker to refer a one of them.
</p>

### 2. Inheritance
<p align="justify">
Powerfull feature that allows you to have code reusability. We can use Inheritance when we have a class and we want to create a new one that use stuff from the other. Child classes can inherit methods and properties from parent class. 
</p>

### 3. Polymorphism
<p align="justify">
Many methods can do the same task. It allows you to determine what kind of function to run while the programming is running.
</p>

### 4. Encapsultation
<p align="justify">
It allows you Hide data and complexity. Containing information in an object, exposing only selected information
</p>

### 5. Class
<p align="justify">
It is a template to create objects and we can difine attributes and operations.
</p>

### 6. Object
<p align="justify">
A thing from the real world. Objects are instances of classes created with specific data.
</p>

### 7. Instance
<p align="justify">
An instance is a specific realization of any object. An object may be different in several ways, and each realized variation of that object is an instance.
</p>

### 8. Interface
<p align="justify">
Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. 
</p>

### 9. Modifiers
<p align="justify">
Properties and methods can have access modifiers which control where they can be accessed.

There are three access modifiers:

public - the property or method can be accessed from everywhere. This is default.

protected - the property or method can be accessed within the class and by classes derived from that class.

private - the property or method can ONLY be accessed within the class
</p>

### 10. Constructors
<p align="justify">
A constructor allows you to initialize an object's properties upon creation of the object. 
</p>

##  OOP Example using typescript 

### Creating Class
First of all we have to abstract something from reality lets imagine that we have a company and we have workers so lets create an a class with some attributes.

```typescript
class Worker {
    name: string;
    lastName: string;
    age: number;
    nationality: string;
}
```

### Creating Constructor
When we initialize a class by default we can assign some values to the attributes and we can do this with the constructors.

```typescript
class Worker {
    name: string;
    lastName: string;
    age: number;
    nationality: string;

    constructor(name: string, lastName: string, age: number, nationality: string){
        this.name=name;
        this.lastName=lastName;
        this.age=age;
        this.nationality=nationality;
    }
}
```

### Instance of the class
To initialize the object we have to use "new" word and the class above, we have to send the correspond values.

```typescript
let worker1 = new Worker("Carlos", "García", 23, "Guatemala")
```

### Modifiers
In object-oriented programming, the concept of 'Encapsulation' is used to make class members public or private i.e. a class can control the visibility of its data members. This is done using access modifiers.

In our example now we want to add a new attribute called ID but we want that the value cannot be easily accessed.

```typescript
class Worker {
    name: string;
    lastName: string;
    age: number;
    nationality: string;
    private id:string;

    constructor(name: string, lastName: string, age: number, nationality: string, id:string){
        this.name=name;
        this.lastName=lastName;
        this.age=age;
        this.nationality=nationality;
        this.id=id;
    }
}
```

### interfaces
Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.
Example:

```typescript
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; 
    getManagerName(number): string; 
}
```
# Day 3
## Training with codewars 
<br>

### Build Tower  
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

```typescript
export const towerBuilder = (nFloors: number): string[] => {
  // build here
}
```
Solution:
```typescript
export const towerBuilder = (nFloors: number): string[] => {
  let tree:string [] = [];
  for(let i:number =0; i<nFloors; i++){
    let stri:string=''                    
    stri+=' '.repeat(i)+'*'.repeat(nFloors-i+nFloors-i-1)+' '.repeat(i);
    tree.push(stri);
  }
  return tree.reverse();
}
```
<br>

### Build Tower  
ohn has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

```typescript
export function meeting(s: string): string {
    // your code
}
```
Solution:
```typescript
export function meeting(s: string): string {
    
    return '('+s.split(';').map(x => x.toUpperCase() .split(':').reverse().join(', ')).sort().join(')(')+')'
}
```

