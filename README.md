# airport_js
by @sammyabukmeil and @sanjsanj

Task:
-----
Re-do the Ruby Airport challenge in Javascript, using Jasmine for testing

How To Run:
-----------
In the application's root folder type `open SpecRunner.html`

Tests:
------
```
27 specs, 0 failures

Plane when created
  has 'flying' status
  is located in the air

Plane can
  request to land at airport
  land and change status to 'landed'
  not land after landing
  request to take off from airport
  takeoff and change status to 'flying'
  not takeoff after takeoff

Plane knows
  it's in the air when created
  it's in the airport after landing
  it's in the air after takeoff

Airport knows
  plane is in the air
  plane is in the airport

Airport can
  respond to a landing request from a plane
  respond to a takeoff request from a plane
  order a plane to take off

When airport is full, it
  does not let a plane land

When weather is bad, aiport does not let a plane
  land
  takeoff

Integration test
  6 planes can be created
  Airport knows planes are in the air
  6 planes can land at the airport
  Airport knows landed plane is in the airport
  Airport knows landed plane has status 'landed'
  Airport denies landing permission when it is full
  After all planes have taken off there are no more landed planes
  After all planes have taken off their status is 'flying'
```
