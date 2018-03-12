function Occupancy(rooms){
  this.list = rooms || [];
}

Occupancy.prototype.occupancyTotals = function(){
  return this.list.map(function(room){
    return room[0] + room[1];
  })
}
}