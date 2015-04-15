describe('Plane when created', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it('has \'flying\' status', function() {
    expect(plane.status()).toBe('flying');
  });

  it('is located in the air', function() {
    expect(plane.location()).toBe('air');
  })
});

describe('Plane can', function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landingPermission', 'takeoffPermission']);
  });

  it('request to land at airport', function() {
    airport.landingPermission.and.callFake(function() {
      return true;
    });
    expect(plane.requestLand(airport)).toEqual(true);
  });

  it('land and change status to \'landed\'', function() {
    plane.land(airport);
    expect(plane.status()).toBe('landed');
  });

  it('not land after landing', function() {
    plane.land(airport);
    expect(function(){plane.land(airport)}).toThrow("Already landed");
  });

  it('request to take off from airport', function() {
    airport.takeoffPermission.and.callFake(function() {
      return true;
    });
    plane.land(airport);
    expect(plane.requestTakeoff(airport)).toEqual(true);
  });

  it('takeoff and change status to \'flying\'', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(plane.status()).toBe('flying');
  });

  it('not takeoff after takeoff', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(function(){plane.takeoff(airport)}).toThrow("Already taken off");
  });

});

describe('Plane knows', function() {

  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landingPermission', 'takeoffPermission']);
  });

  it('it\'s in the air when created', function() {
    expect(plane.location()).toBe('air');
  });

  it('it\'s in the airport after landing', function() {
    plane.land(airport);
    expect(plane.location()).toBe('airport');
  });

  it('it\'s in the air after takeoff', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(plane.location()).toBe('air');
  });

});
