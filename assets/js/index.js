function Occupancy(rooms){
  this.list = rooms || [[0,0]];
  this.maxPeople = this._maxPeople();
}

Occupancy.prototype._biggestRoom = function(){
  let biggestRoomTemp = [];
  let biggestRoomIndex = 0;
  let biggestRoomsize = this._totalPeople(this.list[0])

  for(let i = 1; i < this.list.length; i++){
    var currentRoom = this._totalPeople(this.list[i])
    if(currentRoom > biggestRoomsize){
      biggestRoomsize = currentRoom;
      biggestRoomIndex = i;
    }
  }
  return  this.list[biggestRoomIndex];
}

Occupancy.prototype._totalPeople = function(room){
  return room.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)
}

Occupancy.prototype._maxPeople = function(){
  return this._totalPeople(this._biggestRoom());
}