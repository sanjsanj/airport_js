var Airport = function() {
  this.capacity = 0;
  this.landedPlanes = [];
};

Airport.prototype.locationOf = function(plane) {
  return plane.location();
};

Airport.prototype.orderTakeoff = function(plane) {
  return plane.takeoff(this);
};

Airport.prototype.landingPermission = function(plane) {
  if (this.capacity < 6 && this.isWeatherGood()) {
    this.capacity ++;
    this.landedPlanes.push(plane);
    return plane.land(this);
  } else {
    throw "Permission denied";
  };
};

Airport.prototype.takeOffPermission = function(plane) {
  if (this.isWeatherGood()) {
    return this.orderTakeoff(plane);
  } else {
    throw "Permission denied";
  };
};

Airport.prototype.isWeatherGood = function() {
  return true;
};
