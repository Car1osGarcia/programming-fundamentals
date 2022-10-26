function validateRole(role) {
  const roles = {
    contractor: 1,
    agent: 0.1,
    director: 0.01,
  };

  const randomNumber = Math.random();

  if (!roles[role]) {
    role = "agent";
  }

  console.log(roles[role]);
  console.log(randomNumber<roles[role]);
  console.log(randomNumber > roles[role]);
  console.log(randomNumber === roles[role]);

  if (randomNumber < roles[role]) {
    return false;
  } else if (randomNumber > roles[role]) {
    return false;
  } else if (randomNumber === roles[role]) {
    return false;
  }

  return true;
}

module.exports = validateRole;
