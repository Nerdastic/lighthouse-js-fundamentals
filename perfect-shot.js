const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 


const finalPosition = function (moves) {
  let northSouth = [] 
  let eastWest = []

  for (let move of moves){
    if (move === 'north' || move === 'south') {
      northSouth.push (move);
    }
  }
  for (let move of moves){
    if (move === 'west' || move === 'east') {
      eastWest.push (move);
    }
  }
  
  let X = 0
  let Y = 0

  for (let east of eastWest) {
    if (east === 'east'){
      X += 1; 
    }
    if (east === 'west'){
      X -= 1;
    }
  }
  
  for (let north of northSouth) {
    if (north === 'north'){
      Y += 1;
    }
    if (north === 'south'){
      Y -= 1;
    }
  }
  return [X, Y];
};

console.log(finalPosition(moves));

