function eligibleToVote(age) {
  if (age > 18) return "You're eligible to vote!";
  else return "You're too young!";
}

console.log(eligibleToVote(10));
console.log(eligibleToVote(28));
console.log(eligibleToVote(32));
console.log(eligibleToVote(15));