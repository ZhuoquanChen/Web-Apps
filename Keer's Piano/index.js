// The amount of buttons need click
var numberOfDrumButtons = document.querySelectorAll(".key").length;
// console.log(numberOfDrumButtons);

// Dectecting button press
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {

    // play audios
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Dectecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// play audios
function makeSound(key) {

  switch (key) {
    case "q":
      var q = new Audio("sounds/A0.mp3");
      q.play();
      break;

    case "w":
      var w = new Audio("sounds/A2.mp3");
      w.play();
      break;

    case "e":
      var e = new Audio('sounds/A4.mp3');
      e.play();
      break;

    case "r":
      var r = new Audio('sounds/A6.mp3');
      r.play();
      break;

    case "t":
      var t = new Audio('sounds/B0.mp3');
      t.play();
      break;

    case "y":
      var y = new Audio('sounds/B2.mp3');
      y.play();
      break;

    case "u":
      var u = new Audio('sounds/B4.mp3');
      u.play();
      break;

    case "i":
      var i = new Audio('sounds/B6.mp3');
      i.play();
      break;

    case "o":
      var o = new Audio('sounds/C1.mp3');
      o.play();
      break;

    case "p":
      var p = new Audio('sounds/C3.mp3');
      p.play();
      break;

    case "a":
      var a = new Audio('sounds/C5.mp3');
      a.play();
      break;

    case "s":
      var s = new Audio('sounds/C7.mp3');
      s.play();
      break;

    case "d":
      var d = new Audio('sounds/D2.mp3');
      d.play();
      break;

    case "f":
      var f = new Audio('sounds/D4.mp3');
      f.play();
      break;

    case "g":
      var g = new Audio('sounds/D6.mp3');
      g.play();
      break;

    case "h":
      var h = new Audio('sounds/E2.mp3');
      h.play();
      break;

    case "j":
      var j = new Audio('sounds/E4.mp3');
      j.play();
      break;

    case "k":
      var k = new Audio('sounds/E6.mp3');
      k.play();
      break;

    case "l":
      var l = new Audio('sounds/E7.mp3');
      l.play();
      break;

    case "z":
      var z = new Audio('sounds/F2.mp3');
      z.play();
      break;

    case "x":
      var x = new Audio('sounds/F4.mp3');
      x.play();
      break;

    case "c":
      var c = new Audio('sounds/F6.mp3');
      c.play();
      break;

    case "v":
      var v = new Audio('sounds/F7.mp3');
      v.play();
      break;

    case "b":
      var b = new Audio('sounds/G2.mp3');
      b.play();
      break;

    case "n":
      var n = new Audio('sounds/G4.mp3');
      n.play();
      break;

    case "m":
      var m = new Audio('sounds/G6.mp3');
      m.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // add css file: .press to classList for executing
  activeButton.classList.add("pressed");
  // using setTimeout function to turn back to original state
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}
