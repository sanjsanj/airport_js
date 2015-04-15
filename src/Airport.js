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
  if (this.capacity < 6) {
    this.capacity ++;
    return plane.land(this);
    console.log(this.capacity);
  } else {
    throw "Airport is full";
  };
};

Airport.prototype.takeOffPermission = function(plane) {
  return plane.takeoff(this);
};
