const stations = [
    ['A', 10, 'school'],
    ['B', 9, 'restaurant'],
    ['C', 21, 'community centre'],
    ['D', 15, 'school'],
    ['E', 50, 'restaurant'],
    ['F', 20, 'school'],
    ['G', 40, 'community centre'],
    ['H', 50, 'school'],
];

const chooseStations = function (stations) {
  const okStations = [];

  for (let station of stations){
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
      okStations.push (station[0]);
    }
  }
  return okStations;
};
console.log(chooseStations(stations));