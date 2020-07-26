const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  
  let X = 0;
  let Y = 0;
  
  for (let move of moves) {
    switch (move) {
      case 'north':
        Y++;
        break;
      case 'south':
        Y--;
        break;
      case 'east':
        X++;
        break;
      case 'west':
        X--;
        break;
      default:
    }
  }
  return console.log([X,Y]);  
};

finalPosition(moves);