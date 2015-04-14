describe('Airport knows', function() {

  var plane;

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

describe('Airport can', function() {

  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['location', 'takeoff', 'requestLand']);
  });

  it('order a plane to take off', function() {
    plane.takeoff.and.callFake(function() {
      return true;
    });
    expect(airport.orderTakeoff(plane)).toBe(true);
  });

  it('allow a plane to land', function() {
    plane.requestLand.and.callFake(function() {
      airport.landingPermission(plane);
    });
    console.log(plane.requestLand);
    expect(plane.requestLand).toBe(true);
  });

});

describe('1', function() {

  it('1', function() {
    // console.log(plane);
  });
});
