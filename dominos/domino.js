//Refresh la page automatiquement


// faire disparaître le menu après avoir emprunté le bouton 'Join'
// getElementById pour importer un id du HTML

 function joinParty() {

  const start = document.getElementById('start');
  const game = document.getElementById('game');

  start.style.display = 'none';
  game.style.display = 'block';
  
}

// Tableau vide de mes dominos (mains et pioche)
var dominos = [];
// Tableau vide de la main du premier joueur
var handPlayerOne = [];
//Tableau vide de la main du deuxième joueur
var handPlayerTwo = [];

function createDominos() {
  //Tant que i vaut 0 et qu'il est inférieur à 28, alors j'incrémente mon index avec + 1
  
  for (var i = 0; i < 28; i++) {
      dominos[i] = "domino"+i+".png";
  }


}

createDominos(dominos);

function shuffle(a) {
  for (let i = a.length-1; i > 0; i--) {
      const b = Math.floor(Math.random() * (i-1));
      [a[i], a[b]] = [a[b], a[i]];
  }
  return a;
}

var myDominos = createDominos();
shuffle(dominos);
console.log(dominos);

var handPlayerOne = 7;
var handPlayerTwo = 7;


function distribution(array) {
  handPlayerOne = array.splice(array.length - handPlayerOne);
  handPlayerTwo = array.splice(array.length - handPlayerTwo);

  console.log(handPlayerOne);
  console.log(handPlayerTwo);
  
  return array;

}

distribution(dominos);


function draw(array) {

  var newDominos = array.splice(array.length - handPlayerOne);
  //newDominos = array.splice(array.length - handPlayerTwo);
  handPlayerOne.push(newDominos[0]);
  handPlayerTwo.push(newDominos[0]);
  console.log(newDominos);
  return array;

};
  document.getElementById("button").addEventListener('click', function(){
    draw(dominos);
  })
  

function alternatePlayer() {
if (handPlayerOne) {


  return handPlayerTwo;
}
}

  document.getElementById("handPlayerOne").innerHTML = '<img src="' + handPlayerOne.join('" /><img src="') + '" />';
  document.getElementById("handPlayerTwo").innerHTML = '<img src="' + handPlayerTwo.join('" /><img src="') + '" />';


























