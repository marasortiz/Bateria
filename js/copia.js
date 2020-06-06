for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".tambor")[i].addEventListener("click",function() {
      sonidos(this.innerHTML);
      animarBoton(this.innerHTML);
    }
  );
}

window.addEventListener("keydown", function() {
  sonidos(event.key);
  animarBoton(event.key);
});

function sonidos(boton) {
  switch (boton) {
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
}
function animarBoton(boton){
  document.querySelector("." + boton).classList.add("presionado");
  setTimeout(function() {
    document.querySelector("." + boton).classList.remove("presionado");
  }, 100);
}
