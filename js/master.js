for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".tambor")[i].addEventListener("click",
    function() {
      switch (this.innerHTML) {
        case "W":
          var w = new Audio('sound/tom-1.mp3');
          w.play();
          break;
        case "A":
          var a = new Audio('sound/tom-2.mp3');
          a.play();
          break;
        case "S":
          var s = new Audio('sound/tom-3.mp3');
          s.play();
          break;
        case "D":
          var d = new Audio('sound/tom-4.mp3');
          d.play();
          break;
        case "J":
          var j = new Audio('sound/snare.mp3');
          j.play();
          break;
        case "K":
          var k = new Audio('sound/crash.mp3');
          k.play();
          break;
        case "L":
          var l = new Audio('sound/kick-bass.mp3');
          l.play();
          break;
      }
    }
  );
}

window.addEventListener("keydown", function() {
  switch (event.key) {
    case "w":
      var w = new Audio('sound/tom-1.mp3');
      w.play();
      break;
    case "a":
      var a = new Audio('sound/tom-2.mp3');
      a.play();
      break;
    case "s":
      var s = new Audio('sound/tom-3.mp3');
      s.play();
      break;
    case "d":
      var d = new Audio('sound/tom-4.mp3');
      d.play();
      break;
    case "j":
      var j = new Audio('sound/snare.mp3');
      j.play();
      break;
    case "k":
      var k = new Audio('sound/crash.mp3');
      k.play();
      break;
    case "l":
      var l = new Audio('sound/kick-bass.mp3');
      l.play();
      break;
  }
}, true);
