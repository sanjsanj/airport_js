describe('Airport knows', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['location']);
  });

  it('plane is in the air', function() {
    plane.location.and.callFake(function() {
      return 'air';
    });
    expect(airport.locationOf(plane)).toBe('air');
  });

  it('plane is in the airport', function() {
    plane.location.and.callFake(function() {
      return 'airport';
    });
    expect(airport.locationOf(plane)).toBe('airport');
  });
});
