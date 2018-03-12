function Occupancy(rooms){
  this.list = rooms || [[0,0]];
  this.maxPeople = this._maxPeople();
}

Occupancy.prototype.biggestRoom = function(){
  let biggestRoomTemp = [];
  let biggestRoomIndex = 0;
  let biggestRoomsize = this.list[0].reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  }, 0)

  for(let i = 1; i < this.list.length; i++){
    var currentRoom = this.list[i][0] + this.list[i][1]
    if(currentRoom > biggestRoomsize){
      biggestRoomsize = currentRoom;
      biggestRoomIndex = i;
    }
  }
  return  this.list[biggestRoomIndex];
}

Occupancy.prototype._totalPeople = function(room){
  return room.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  }, 0)
}

Occupancy.prototype._maxPeople = function(){
  var biggestRoom = this.biggestRoom()
  return biggestRoom[0] + biggestRoom[1];
}