var Airport = function() {
};

Airport.prototype.locationOf = function(plane) {
  return plane.location();
};

Airport.prototype.orderTakeoff = function(plane) {
  return plane.takeoff(this);
};

Airport.prototype.landingPermission = function(plane) {
  return plane.land(this);
};
