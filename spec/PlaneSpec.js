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

  it('request to land at airport', function() {
    airport = jasmine.createSpyObj('airport', ['landingPermission']);
    airport.landingPermission.and.callFake(function() {
      return true;
    });
    expect(plane.requestLand(airport)).toEqual(true);
  });

  it('can land and changes status to landed', function() {
    plane.land;
    expect(plane.status).toBe('landed');
  });
});
