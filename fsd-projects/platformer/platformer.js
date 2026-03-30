const { createElement } = require("react");

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 600, 200, 10)
createPlatform(200, 700, 100, 10)
createPlatform(500, 500, 100, 10)
createPlatform(500, 700, 100, 10)
createPlatform(700, 400, 100, 10)
createPlatform(900, 300, 100, 10)
createPlatform(700, 200, 100, 10)
createPlatform(300, 100, 300, 10)
    // TODO 3 - Create Collectables
createCollectable("max", 200, 700)
createCollectable("steve", 300, 500)
createCollectable("max,", 400, 600)

    
    // TODO 4 - Create Cannons
createCannon("Top", 200)
createCannon("Bottom", 600)
createCannon("Left", 300)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
