var Plane = function() {
  this.status = 'flying';
  this.location = 'air';
};

Plane.prototype.requestLand = function(airport) {
  return airport.landingPermission();
};

Plane.prototype.requestTakeoff = function(airport) {
  return airport.takeoffPermission();
};

Plane.prototype.land = function(airport) {
  if (this.status === 'flying') {
    this.status = 'landed';
    this.location = 'airport';
  } else {
    throw "Already landed";
  }
};

Plane.prototype.takeoff = function(airport) {
  if (this.status === 'landed') {
    this.status = 'flying';
  } else {
    throw "Already taken off";
  }
};
