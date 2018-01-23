//FLIPPY

var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //we want the garbage collector to take this random obj away
  //just creates a lookup
};

makeFlippyDancer.prototype = Object.create(makeDancer.prototype);

makeFlippyDancer.prototype.constructor = makeFlippyDancer;

makeFlippyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  //toggle some weird css on and off that rotates clockwise 180 degrees? and then
  //does this go backwards? keep adding 180 degrees?
  this.$node.toggle('flip');
};


//OLD CODE:

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call 
//     //to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
