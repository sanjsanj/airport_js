var Plane = function() {
  this.status = 'flying';
  this.location = 'air';
};

Plane.prototype.requestLand = function(airport) {
  return airport.landingPermission();
};

Plane.prototype.land = function(airport) {
  if (this.status === 'flying') {
    this.status = 'landed';
  } else {
    throw "Already landed";
  }
};
