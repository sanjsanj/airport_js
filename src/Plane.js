var Plane = function() {
  this._status = 'flying';
  this._location = 'air';
};

Plane.prototype.location = function(){
  return this._location;
};

Plane.prototype.status = function() {
  return this._status;
};

Plane.prototype.requestLand = function(airport) {
  return airport.landingPermission();
};

Plane.prototype.requestTakeoff = function(airport) {
  return airport.takeoffPermission();
};

Plane.prototype.land = function(airport) {
  if (this.status() === 'flying') {
    this._status = 'landed';
    this._location = 'airport';
  } else {
    throw "Already landed";
  };
};

Plane.prototype.takeoff = function(airport) {
  if (this.status() === 'landed') {
    this._status = 'flying';
    this._location = 'air';
  } else {
    throw "Already taken off";
  }
};
