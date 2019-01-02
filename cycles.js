var sounds = [];

function Sound(path) {
  this.path = path;
  this.sound = {};

  this.load = function() {
    this.sound = loadSound(this.path);
  };

  this.loop = function() {
    this.sound.fade(1, 1.0);
    this.sound.loop();
    this.sound.fade(0, this.sound.duration() * 3);
  };

  this.isLooping = function() {
    return this.sound.isLooping();
  }
}

function preload() {
  soundFormats('wav');
}

function setup() {
}

function draw() {
  sounds.map(function(sound) {
    if (sound.isLooping() === false) {
      try {
        sound.loop();
      } catch (error) {
        // maybe try again later
      }
    }
  });
}


function keyPressed() {
  var sound = new Sound('assets/Track-' + key + '.wav');
  sound.load();
  sounds.push(sound);
}
