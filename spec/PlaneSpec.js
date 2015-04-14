describe('Plane when created', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it('has \'flying\' status', function() {
    expect(plane.status).toBe('flying');
  });

  it('is located in the air', function() {
    expect(plane.location).toBe('air');
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

  it('land and change status to landed', function() {
    plane.land(airport);
    expect(plane.status).toBe('landed');
  });

  it('not land after landing', function() {
    plane.land(airport);
    expect(plane.status).toBe('landed');
    expect(function(){plane.land(airport)}).toThrow("Already landed");
  });

  it('request to take off', function() {
    airport.takeoffPermission.and.callFake(function() {
      return true;
    });
    plane.land(airport);
    expect(plane.requestTakeoff(airport)).toEqual(true);
  });
});
