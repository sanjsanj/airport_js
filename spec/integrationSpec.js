describe('Integration test', function() {

  beforeEach(function(){
    airport = new Airport;
    planes = [];
    for (var i = 0; i < 6; i ++) {
      planes.push(new Plane);
    };
    plane = new Plane;
  });


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
    expect(airport.landedPlanes.length).toBe(6);
  });

  it('Airport knows landed plane is in the airport', function() {
    plane.requestLand(airport);
    expect(airport.locationOf(plane)).toBe('airport');
  });

  it('Airport knows landed plane has status \'landed\'', function() {
    plane.requestLand(airport);
    expect(plane.status()).toBe('landed');
  });

  it('Airport denies landing permission when it is full', function() {
    planes.forEach(function(plane) {
      plane.requestLand(airport);
    });
    expect(function(){plane.requestLand(airport)}).toThrow("Permission denied");
  });

});
