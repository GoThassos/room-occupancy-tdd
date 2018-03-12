var assert = chai.assert;

var rooms = [
  [6,2],
  [7,0],
  [8,0],
  [6,3],
  [2,10],
  [8,1],
  [8]
]

describe('Occupancy', function() {
  it('occupancy object should exist', function(){
    var occupancies = new Occupancy
    assert.equal(occupancies instanceof Occupancy, true)
  })
  describe('#list', function(){
    it('returns the initial room occupancies', function(){
      var occupancies = new Occupancy(rooms)
      assert.deepEqual(occupancies.list, rooms)
    })
  })
  describe('#_biggestRoom()', function(){
    var occupancies = new Occupancy(rooms)
    it('returns array of room with biggest occupancy', function(){
      assert.deepEqual(occupancies._biggestRoom(), [2,10])
    })
  })
  describe('#_mostAdultsWithMostChildrenRoom()', function(){
    var occupancies = new Occupancy(rooms)
    it('returns array of room occupancy with most adults and most children', function(){
      assert.deepEqual(occupancies._mostAdultsWithMostChildrenRoom(), [8,1])
    })
  })
  describe('#_totalPeople', function(){
    var occupancies = new Occupancy(rooms)
    it('returns the sum of people in a room', function(){
      assert.equal(occupancies._totalPeople([2,10]), 12)
    })
  })
  describe('#maxPeople', function(){
    var occupancies = new Occupancy(rooms)
    it('returns the max amount of peaple a room can hold as an integer', function(){
      assert.equal(occupancies.maxPeople, 12)
    })
    describe('#_maxPeople()', function(){
      it('has private method that add values of biggest room array element', function(){
        assert.equal(occupancies._maxPeople(), 12)
      })
    })
  })
  describe('#maxAdultsBiggestRoom', function(){
    var occupancies = new Occupancy(rooms)
    it('return the number of adults of the largest room by occupancy as integer', function(){
      assert.equal(occupancies.maxAdultsBiggestRoom, 2)
    })
  })
  describe('#maxChildrenBiggestRoom', function(){
    var occupancies = new Occupancy(rooms)
    it('return the number of children of the largest room by occupancy as integer', function(){
      assert.equal(occupancies.maxChildrenBiggestRoom, 10)
    })
  })
})