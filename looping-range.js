function range (start, end, step) { 
  if (start <= end && step !== 0) {
    let array = [];  
    for(let i = 0 ; i < Math.floor((end - start) / step) + 1 ; i++){
      array.push (start + (step * i));
    }
    return array;
  } else {
    return [];
  }
}
console.log(range(0, 10, 2));
console.log(range(-12, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 30, 0));
console.log(range(-37, 55, 8));