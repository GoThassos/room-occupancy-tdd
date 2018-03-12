function Occupancy(rooms){
  this.list = rooms || [];
}

Occupancy.prototype.biggestRoom = function(){
  let biggestRoomTemp = [];
  let biggestRoomIndex = 0;
  let biggestRoomsize = this.list[0][0] + this.list[0][1]
  for(let i = 1; i < this.list.length; i++){
    var currentRoom = this.list[i][0] + this.list[i][1]
    if(currentRoom > biggestRoomsize){
      biggestRoomsize = currentRoom;
      biggestRoomIndex = i;
    }
  }
  return  this.list[biggestRoomIndex];
}