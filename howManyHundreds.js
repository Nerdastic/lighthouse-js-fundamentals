function howManyHundreds (number) {
  
  let numOfContainers = 0;
  if ((number / 100) >= 1) {
    numOfContainers = (number / 100) - ((number % 100) / 100);
  }
  else { numOfContainers = 0;
  }

  return numOfContainers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);