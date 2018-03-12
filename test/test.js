var assert = chai.assert;

var testA = {
  rooms: [
    [6,2],
    [7,0],
    [8,0],
    [6,3],
    [2,10],
    [8,1],
    [8]
  ],
  cleanRooms: [
    [6,2],
    [7,0],
    [8,0],
    [6,3],
    [2,10],
    [8,1],
    [8,0]
  ],
  biggestRoom: [2,10],
  roomMostAdults: [8,1],
  maxPeople: 12,
  maxAdultsBiggestRoom: 2,
  maxChildrenBiggestRoom: 10,
  maxAdultsRoomMostAdults: 8,
  maxChildrenRoomMostAdults: 1,
  maxAdultsInitial: 8,
  maxChildrenInitial: 11,
}

var testB = {
  rooms: [
    [2,1],
    [2,2],
    [6],
  ],
  cleanRooms: [
    [2,1],
    [2,2],
    [6,0],
  ],
  biggestRoom: [6,0],
  roomMostAdults: [6,0],
  maxPeople: 6,
  maxAdultsBiggestRoom: 6,
  maxChildrenBiggestRoom: 0,
  maxAdultsRoomMostAdults: 6,
  maxChildrenRoomMostAdults: 0,
  maxAdultsInitial: 6,
  maxChildrenInitial: 5,
}

var testC = {
  rooms: [
    [1],
    [2],
    [3],
  ],
  cleanRooms: [
    [1,0],
    [2,0],
    [3,0],
  ],
  biggestRoom: [3,0],
  roomMostAdults: [3,0],
  maxPeople: 3,
  maxAdultsBiggestRoom: 3,
  maxChildrenBiggestRoom: 0,
  maxAdultsRoomMostAdults: 3,
  maxChildrenRoomMostAdults: 0,
  maxAdultsInitial: 3,
  maxChildrenInitial: 2,
}

var testD = {
  rooms: [
    [3],
    [2,1],
    [1,2]
  ],
  cleanRooms: [
    [3,0],
    [2,1],
    [1,2]
  ],
  biggestRoom: [3,0],
  roomMostAdults: [3,0],
  maxPeople: 3,
  maxAdultsBiggestRoom: 3,
  maxChildrenBiggestRoom: 0,
  maxAdultsRoomMostAdults: 3,
  maxChildrenRoomMostAdults: 0,
  maxAdultsInitial: 3,
  maxChildrenInitial: 2,
}

const currentTest = testA;
const occupancies = new Occupancy(currentTest.rooms)

describe('Occupancy', function() {
  it('occupancy object should exist', function(){
    var occupancies = new Occupancy
    assert.equal(occupancies instanceof Occupancy, true)
  })


  describe('#_list', function(){
    it('returns the initial room occupancies (with children defined)', function(){
      assert.deepEqual(occupancies._list, currentTest.cleanRooms)
    })

    describe('#_initializeList()', function(){
      it('has private method that adds zero children to array if none defined', function(){
        assert.deepEqual(occupancies._initializeList(currentTest.rooms), currentTest.cleanRooms)
      })
    })
  })

  describe('#_biggestRoom()', function(){
    it('returns array of room with biggest occupancy', function(){
      assert.deepEqual(occupancies._biggestRoom(), currentTest.biggestRoom)
    })
  })

  describe('#_mostAdultsWithMostChildrenRoom()', function(){
    it('returns array of room occupancy with most adults and most children', function(){
      assert.deepEqual(occupancies._mostAdultsWithMostChildrenRoom(), currentTest.roomMostAdults)
    })
  })

  describe('#_totalPeople', function(){
    it('returns the sum of people in a room', function(){
      assert.equal(occupancies._totalPeople(currentTest.biggestRoom), currentTest.maxPeople)
    })
  })

  describe('#_maxPeople', function(){
    it('returns the max amount of peaple a room can hold as an integer', function(){
      assert.equal(occupancies._maxPeople, currentTest.maxPeople)
    })

    describe('#_getMaxPeople()', function(){
      it('has private method that add values of biggest room array element', function(){
        assert.equal(occupancies._getMaxPeople(), currentTest.maxPeople)
      })
    })
  })

  describe('#_maxAdultsBiggestRoom', function(){
    it('return the number of adults of the largest room by occupancy as integer', function(){
      assert.equal(occupancies._maxAdultsBiggestRoom, currentTest.maxAdultsBiggestRoom)
    })
  })

  describe('#_maxChildrenBiggestRoom', function(){
    it('return the number of children of the largest room by occupancy as integer', function(){
      assert.equal(occupancies._maxChildrenBiggestRoom, currentTest.maxChildrenBiggestRoom)
    })
  })

  describe('#_maxAdultsRoomMostAdults', function(){
    it('return the number of adults of the room with most adults and most children as integer', function(){
      assert.equal(occupancies._maxAdultsRoomMostAdults, currentTest.maxAdultsRoomMostAdults)
    })
  })

  describe('#_maxChildrenRoomMostAdults', function(){
    it('return the number of children of the room with most adults and most children as integer', function(){
      assert.equal(occupancies._maxChildrenRoomMostAdults, currentTest.maxChildrenRoomMostAdults)
    })
  })

  describe('#maxAdultsInitial', function(){
    it('return the max attribute value for the adults input field as integer', function(){
      assert.equal(occupancies.maxAdultsInitial, currentTest.maxAdultsInitial)
    })
  })

  describe('#maxChildrenInitial', function(){
    it('return the max attribute value for the children input field as integer', function(){
      assert.equal(occupancies.maxChildrenInitial, currentTest.maxChildrenInitial)
    })
  })

})

describe('Occupancy Logic', function(){
  describe('#updateChildrenMax()', function(){
    describe('returns the max number of children possible from the currently selected adults', function(){
      it('when 1 adult selected, set max children to 11', function(){
        assert.equal(occupancies.updateChildrenMax(1), 11)
      })
      it('when 2 adults selected, set max children to 10', function(){
        assert.equal(occupancies.updateChildrenMax(2), 10)
      })
      it('when 3 adults selected, set max children to 6', function(){
        assert.equal(occupancies.updateChildrenMax(3), 6)
      })
      it('when 4 adults selected, set max children to 5', function(){
        assert.equal(occupancies.updateChildrenMax(4), 5)
      })
      it('when 5 adults selected, set max children to 4', function(){
        assert.equal(occupancies.updateChildrenMax(5), 4)
      })
      it('when 6 adults selected, set max children to 3', function(){
        assert.equal(occupancies.updateChildrenMax(6), 3)
      })
      it('when 7 adults selected, set max children to 2', function(){
        assert.equal(occupancies.updateChildrenMax(7), 2)
      })
      it('when 8 adults selected, set max children to 1', function(){
        assert.equal(occupancies.updateChildrenMax(8), 1)
      })
    })
  })
  describe('#updateAdultMax()', function(){
    it('when 0 children selected, set max adult to 8', function(){
      assert.equal(occupancies.updateAdultsMax(0), 8)
    })
    it('when 1 children selected, set max adult to 8', function(){
      assert.equal(occupancies.updateAdultsMax(1), 8)
    })
    it('when 2 children selected, set max adult to 7', function(){
      assert.equal(occupancies.updateAdultsMax(2), 7)
    })
    it('when 3 children selected, set max adult to 6', function(){
      assert.equal(occupancies.updateAdultsMax(3), 6)
    })
    it('when 4 children selected, set max adult to 5', function(){
      assert.equal(occupancies.updateAdultsMax(4), 5)
    })
    it('when 5 children selected, set max adult to 4', function(){
      assert.equal(occupancies.updateAdultsMax(5), 4)
    })
    it('when 6 children selected, set max adult to 3', function(){
      assert.equal(occupancies.updateAdultsMax(6), 3)
    })
    it('when 7 children selected, set max adult to 2', function(){
      assert.equal(occupancies.updateAdultsMax(7), 2)
    })
    it('when 8 children selected, set max adult to 1', function(){
      assert.equal(occupancies.updateAdultsMax(8), 1)
    })
    it('when 9 children selected, set max adult 2', function(){
      assert.equal(occupancies.updateAdultsMax(9), 2)
    })
    it('when 10 children selected, set max adult 2', function(){
      assert.equal(occupancies.updateAdultsMax(10), 2)
    })
    it('when 11 children selected, set max adult 1', function(){
      assert.equal(occupancies.updateAdultsMax(11), 1)
    })
  })
})