describe('Integration test', function() {

  var airport = new Airport;
  var planes = [];
  for (var i = 0; i < 6; i ++) {
    planes.push(new Plane);
  };

  it('6 planes can be created', function() {
    console.log(planes);
    expect(planes.length).toBe(6);
  });

  it('Airport knows planes are in the air', function() {
    planes.forEach(function(plane) {
      expect(airport.locationOf(plane)).toBe('air');
    });
  });

  it('6 planes can land at the airport', function() {
    planes.forEach(function(plane) {
      plane.requestLand(airport);
    });
    expect(airport.landedPlanes()).toBe(6);
  });

});
