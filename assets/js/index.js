function Occupancy(rooms){
  this.list = this._list(rooms);
  this.maxPeople = this._maxPeople();
  this.maxAdultsBiggestRoom = this._biggestRoom()[0];
  this.maxChildrenBiggestRoom = this._biggestRoom()[1];
  this.maxAdultsRoomMostAdults = this._mostAdultsWithMostChildrenRoom()[0]
  this.maxChildrenRoomMostAdults = this._mostAdultsWithMostChildrenRoom()[1]
}

Occupancy.prototype._list = function(rooms) {
  if(typeof rooms === 'undefined')
    return [[0,0]];
  else {
    return rooms.map(function(room){
      var adults = room[0];
      var children = typeof room[1] !== 'undefined' ? room[1] : 0;
      return [adults, children];
    })
  }
}

Occupancy.prototype._biggestRoom = function(){
  let biggestRoomIndex = 0;
  let biggestRoomsize = this._totalPeople(this.list[0])

  for(let i = 1; i < this.list.length; i++){
    var currentRoom = this._totalPeople(this.list[i])
    if(currentRoom > biggestRoomsize){
      biggestRoomsize = currentRoom;
      biggestRoomIndex = i;
    }
  }
  return this.list[biggestRoomIndex];
}

Occupancy.prototype._mostAdultsWithMostChildrenRoom = function(){
  const maxAdults = this.list.reduce(function(accummulator, b) {
    return Math.max(accummulator, b[0]);
  }, 0);
  
  const roomsMaxAdults = this.list.filter(function(room){
    return room[0] == maxAdults
  })

  const maxChildren = roomsMaxAdults.reduce(function(accummulator, b) {
    return Math.max(accummulator, b[1]);
  }, 0);

  return [maxAdults, maxChildren]
}

Occupancy.prototype._totalPeople = function(room){
  return room.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0)
}

Occupancy.prototype._maxPeople = function(){
  return this._totalPeople(this._biggestRoom());
}

Occupancy.prototype.updateChildrenMax = function(adults_selected){
  let max_adults = this.maxAdultsRoomMostAdults;
  let max_children_most_adults = this.maxChildrenRoomMostAdults;
  let max_adults_largest_room = this.maxAdultsBiggestRoom;
  let max_people = this.maxPeople;

  if(adults_selected == max_adults)
    return max_adults - adults_selected + max_children_most_adults;
  else {
    if(max_adults_largest_room < adults_selected)
      return max_adults - adults_selected + max_children_most_adults;
    else
      return max_people - adults_selected;
  }
}

Occupancy.prototype.updateAdultsMax = function(children_selected){
  let max_adults = this.maxAdultsRoomMostAdults;
  let max_children_most_adults = this.maxChildrenRoomMostAdults;
  let max_adults_largest_room = this.maxAdultsBiggestRoom;
  let max_children_largest_room = this.maxChildrenBiggestRoom;

  if(children_selected == 0)
    return max_adults;

  if(children_selected > 0){
    if(children_selected < (max_children_most_adults + max_adults))
      return max_adults + max_children_most_adults - children_selected;
    
    if(children_selected > (max_children_most_adults + max_adults))
      return max_adults_largest_room + max_children_largest_room - children_selected;

    if(children_selected == (max_children_most_adults + max_adults))
      return max_adults_largest_room;
  }
}