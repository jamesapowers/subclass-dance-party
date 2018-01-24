var makeBeamDancer = function(top, left) {
  makeDancer.call(this, top, left);

  this.$node.addClass("beamDancer");
};

makeBeamDancer.prototype = Object.create(makeDancer.prototype);
makeBeamDancer.prototype.constructor = makeBeamDancer;

