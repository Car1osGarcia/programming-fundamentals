<h1 align="center"> Node.js part 1</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png" />
</div>

<br>
<br>

# Day 1
## What is Node.JS? 
### It is a JavaScript runtime environment that let you execute a program written in JavaScript.

<br>

## What problem does Node.JS solve? 
### It achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.

<br>

## What is the V8 Javascript Engine?
### This engine takes the JavaScript code and converts it into a faster machine code.

<br>

## Is Node.JS really necessary in the Development ecosystem?
### Its most advisable to use Node.js, but its not really necesary.

<br>

## What is the difference between Node.JS and any other browser?
### 1. In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js. 
### 2. Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient.
### 3. Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser we are starting to see the ES Modules standard being implemented.

<br>

## What is NVM and Why is it useful for Node.JS developers?
### NVM is a version manager for Node.js, it allows us to quickly install and use different versions of node via the command line.

<br>

## What is a Javascript Module?
### Is a group of functions to excecute a specific task.

<br>

## Why are Javascript Modules necessary?
### Some years ago large scripts were generally not needed, but now we use javascript to create alrge aplications. It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed.

<br>

## What module standards are available in Node.JS?
- CommonJS modules
-  ECMAScript modules

<br>

## What are the differences between ESModules and CommonJS modules?
- The first difference is the syntaxis.
- CommonJS has full and stable support, since it is the default standard.
- ESModules the load is asynchronous, it makes more sense to use it to load a large number of modules. 

<br>

## Which types of modules exist in Node.JS?
- Core Modules: The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts.
- Local Modules: Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders.
- Third Party Modules: Modules that are available online and are installed using the npm are called third party modules. Examples of third party modules are express, mongoose, etc.

<br>

## Node js practice
- Create a new Node.JS project, name it: <your-nickname>/modules.

- Create a new module, name it: operations.js

- Inside operations.js implement two functions, one for the sum operation and one for the subtract operation.

- Create a new module, name it: main.js

- Import the functions implemented in operations.js and use them in any way in main.js.

solution: 
[Node js modules practice](/shadow)

<br>

## What is a Server?
### Is acomputer equipped with specific programs and/or hardware that enables it to offer services to other computers called clients.

<br>

## What is a Client?
### Is any computer hardware or software device that requests access to a service provided by a server.

<br>

## Is a server just another physical computer?
###  Yes, is simply a computer that is used to run a server software. Some applications are servers because offer some type of service and other applications do de request.

<br>

## Is there any similarity between human communication and the client-server model?
###  Yes, the client request to the server something that need and the server answer this request and sends to the client.

<br>

## Is the client-server model applicable only to the Web?
###  No, we can use it to protocols, games, DNS system, email servers and others.

<br>
<br>

# Day 2
## What is an API? 
### API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software.

<br>

## What is a Protocol?
### A protocol is a standardized set of rules for formatting and processing data. Protocols enable computers to communicate with one another.

<br>

## Is the term API only applicable to the communication of programs over the Internet?
### No, for example y linux's kernel use an API to be manage. 

<br>

## Why is structured communication between two programs important?
### So that they can understand each other and that the information travels safely.

<br>

## Is an API just another program or a standard?
### We can say that it is a standard that allow two programs communicate.

<br>

## Do you know any API? Can you list at least 5 examples of APIs?
- Google Maps
- Pay with PayPal.
- AniAPI
- Colormind
- Auth0

<br>

## What is HTTP?
### HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

<br>

## What is JSON?
### Is a lightweight data-interchange format. It is JavaScript Object Notation.

<br>

## What is REST?
### REST is an acronym for REpresentational State Transfer and an architectural style for distributed hypermedia systems. Like other architectural styles, REST has its guiding principles and constraints. 

<br>

## What is a Resource in REST?
### The key abstraction of information in REST is a resource. Any information that we can name can be a resource. For example, a REST resource can be a document or image.

<br>

## What is an HTTP method?
### REST APIs enable you to develop all kinds of web applications having all possible CRUD (create, retrieve, update, delete) operations. REST guidelines suggest using a specific HTTP method on a particular type of call made to the server to do an action.

<br>

## Is REST the same as HTTP?
### REST and HTTP are not the same.

<br>

## Postman only works with REST APIs?
### No postman works with any API like REST, SOAP and others.

<br>

## Is there an alternative to Postman?
### There are a lot of alternatives of postman, a very common one is an extension from VSCode. 

<br>

## Chain of Responsibility design pattern
### Is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

<br>

## Express JS Hello World:
- Create a new Node.JS project using NPM. 
```
npm init -y
```
- Install Express.JS as an external dependency in your project
```
npm i express --save
```

- Create an Express.JS Hello World application

``` javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

- Run with node app.js

<br>
<br>

# Day 4
## Forrest Gump Ping-Pong API
- If the user makes the "ping" move, your API should respond with "pong".
- If the user makes the "pong" move, your API should respond with "ping".

solution:
[Ping-Pong API](/PingPongAPi)

<br>
