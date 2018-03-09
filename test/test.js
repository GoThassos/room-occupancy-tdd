var assert = chai.assert;

describe('Occupancy', function() {
  it('occupancy object should exist', function(){
    var roomsHotel = new Occupancy
    assert.deepEqual(roomsHotel, {})
  })
})