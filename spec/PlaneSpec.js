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
    // spyOn(airport, 'landingPermission').and.returnValue(true);
    expect(plane.requestLand(airport)).toBe(true);
  });
});
