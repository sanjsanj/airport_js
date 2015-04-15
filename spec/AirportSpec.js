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
    plane = jasmine.createSpyObj('plane', ['location', 'takeoff', 'land']);
  });

  it('respond to a landing request from a plane', function() {
    plane.land.and.callFake(function() {
      return true;
    });
    expect(airport.landingPermission(plane)).toBe(true);
  });

  it('respond to a takeoff request from a plane', function() {
    plane.takeoff.and.callFake(function() {
      return true;
    });
    expect(airport.takeOffPermission(plane)).toBe(true);
  });

  it('order a plane to take off', function() {
    plane.takeoff.and.callFake(function() {
      return true;
    });
    expect(airport.orderTakeoff(plane)).toBe(true);
  });

});

describe('When airport is full, it', function() {

  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('does not let a plane land', function() {
    plane.land.and.callFake(function() {
      return true;
    });
    for (var i = 0; i < 6; i++ ) {
        airport.landingPermission(plane);
      };
    expect(function(){airport.landingPermission(plane)}).toThrow("Permission denied");
  });

});

describe('When weather is bad, aiport does not let a plane', function() {

  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('land', function() {
    spyOn(airport, "isWeatherGood").and.callFake(function() {
      return false;
    });
    expect(function(){airport.landingPermission(plane)}).toThrow("Permission denied");
  });

  it('takeoff', function() {
    spyOn(airport, "isWeatherGood").and.callFake(function() {
      return false;
    });
    expect(function(){airport.takeOffPermission(plane)}).toThrow("Permission denied");
  });

});
