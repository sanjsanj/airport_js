var Plane = function() {
  this.status = 'flying';
  this.location = 'air';
};

Plane.prototype.requestLand = function(airport) {
  return airport.landingPermission();
};
