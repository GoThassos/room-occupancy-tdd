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
  maxChildrenRoomMostAdults: 1
}

const currentTest = testA;
const occupancies = new Occupancy(currentTest.rooms)

describe('Occupancy', function() {
  it('occupancy object should exist', function(){
    var occupancies = new Occupancy
    assert.equal(occupancies instanceof Occupancy, true)
  })


  describe('#list', function(){
    it('returns the initial room occupancies (with children defined)', function(){
      assert.deepEqual(occupancies.list, currentTest.cleanRooms)
    })

    describe('#_list()', function(){
      it('has private method that adds zero children to array if none defined', function(){
        assert.deepEqual(occupancies._list(currentTest.rooms), currentTest.cleanRooms)
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

  describe('#maxPeople', function(){
    it('returns the max amount of peaple a room can hold as an integer', function(){
      assert.equal(occupancies.maxPeople, currentTest.maxPeople)
    })

    describe('#_maxPeople()', function(){
      it('has private method that add values of biggest room array element', function(){
        assert.equal(occupancies._maxPeople(), currentTest.maxPeople)
      })
    })
  })

  describe('#maxAdultsBiggestRoom', function(){
    it('return the number of adults of the largest room by occupancy as integer', function(){
      assert.equal(occupancies.maxAdultsBiggestRoom, currentTest.maxAdultsBiggestRoom)
    })
  })

  describe('#maxChildrenBiggestRoom', function(){
    it('return the number of children of the largest room by occupancy as integer', function(){
      assert.equal(occupancies.maxChildrenBiggestRoom, currentTest.maxChildrenBiggestRoom)
    })
  })

  describe('#maxAdultsRoomMostAdults', function(){
    it('return the number of adults of the room with most adults and most children as integer', function(){
      assert.equal(occupancies.maxAdultsRoomMostAdults, currentTest.maxAdultsRoomMostAdults)
    })
  })

  describe('#maxChildrenRoomMostAdults', function(){
    it('return the number of children of the room with most adults and most children as integer', function(){
      assert.equal(occupancies.maxChildrenRoomMostAdults, currentTest.maxChildrenRoomMostAdults)
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
})