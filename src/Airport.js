var Airport = function() {
  this.capacity = 0;
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
    return plane.land(this);
    console.log(this.capacity);
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
