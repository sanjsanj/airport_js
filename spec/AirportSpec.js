describe('Plane when created', function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it('has \'flying\' status', function() {
    expect(plane.status).toBe('flying');
  });
});
