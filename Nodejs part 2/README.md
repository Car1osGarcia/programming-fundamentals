<h1 align="center"> Node.js part 2</h1>
<div align="center">
    <img alt="computer" title="Computer" width="100%" src="https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png" />
</div>

<br>
<br>

# Day 1
## working on project

<br>
<br>

# Day 2
## working on project

<br>
<br>

# Day 3
## Age Prediction API
- The API should be capable to response to any name.
- The API should use route parameters to get the name.
- The age should be a random number that satisfies the condition: age > 0 && age < 100.
- The response should include the age in days.

solution: 
[Age prediction API](/AgePredictionAPI)

<br>

## Secrets Box API Challenge
The API is able to respond with the username and password of the NSA github account only if a parameter called role is inside the body of the request and if this parameter contains the correct role.

solution: 
The thing is we need to understand type coerción and how role-validator works. As can we see this part of code from role-validator.js is trying to validate the role and return false or true, we need that this part of code doesn't return false. the key here is how are the comparisons done. if we put the word toString that is a primitive value,  it will say they are false and return true.

<div align="center">
    <img alt="computer" title="Computer" width="100%" src="../img/hacker.png" />
</div>

<br>
<br>

# Day 4
## working on project

