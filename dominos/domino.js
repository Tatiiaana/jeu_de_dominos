//Refresh la page automatiquement


// faire disparaître le menu après avoir emprunté le bouton 'Join'
// getElementById pour importer un id du HTML

 function joinParty() {

  const start = document.getElementById('start');
  const game = document.getElementById('game');

  start.style.display = 'none';
  game.style.display = 'block';
  
}

//Je déclare une variable qui crée mes dominos


//Tableau vide de la main du premier joueur et un autre qui contiendra les dominos
var dominos = [];
var handPlayerOne = [];

function createDominos() {
  //Tant que i vaut 0 et qu'il est inférieur à 28, alors j'incrémente mon index avec + 1
  
  for (var i = 0; i < 28; i = i + 1) {
      dominos[i] = "domino"+i+".png";
      
 }

}
var test = createDominos();

console.log(dominos);
console.log(handPlayerOne);
document.getElementById("handPlayer").innerHTML = '<img src="' + handPlayerOne.join('" /><img src="') + '" />';





























