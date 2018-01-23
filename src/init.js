$(document).ready(function() {
  window.dancers = [];
  window.flyers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      (($("body").height() - 100) * Math.random()) + 50,
      (($("body").width() - 100) * Math.random()) + 50,
      (Math.random() * 1000) + 500
    );
    $('body').append(dancer.$node);
    
    if (dancerMakerFunctionName === 'makeSprintyDancer') {
      window.flyers.push(dancer);
    } else {
      window.dancers.push(dancer);
    }
  });

  $('.lineUpButton').on('click', function(event) {
    let flyersArray = window.flyers;
    let flyerSpacing = ($("body").width() - 155) / (flyersArray.length - 1);
    if (flyersArray.length === 1) {
      flyersArray[0].setPosition(200, $("body").width() / 2 - 100);
    }
    for (let j = 0; j < flyersArray.length; j++) {
      flyersArray[j].setPosition(200, j * flyerSpacing);
      flyersArray[j].beaming = true;
      //beam up people
    }
    setTimeout(function() {
      let dancersArray = window.dancers;
      let dancerSpacing = ($("body").width() - 155) / (dancersArray.length - 1);
      if (dancersArray.length === 1) {
        dancersArray[0].setPosition(500, $("body").width() / 2 - 100);
      }      
      for (let i = 0; i < dancersArray.length; i++) {
        dancersArray[i].setPosition(500, i * dancerSpacing);
      }
      setTimeout(function() {
        for (let k = 0; k < window.dancers.length; k++) {
          
          // raise up a little higher
          
        }
      }, 1000);
    }, 1000);
    
  });
});

