var assert = chai.assert;

var rooms = [
  [6,2],
  [7,0],
  [8,0],
  [6,3],
  [2,10],
  [8,1]
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
})