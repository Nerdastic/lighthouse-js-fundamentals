function lastIndexOf (arrays, num) {
  let match = false; 
  let answer = 0;
  for (let i = (arrays.length - 1) ; i >= 0 ; i--) { 
    if (arrays[i] === num) {
      match = true;
      answer = i;
      break;
    } 
  }
  if (match === true) {
    return answer;
  } else {
    return -1;
  }
} 


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);