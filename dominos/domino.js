// faire disparaître le menu après avoir emprunté le bouton 'Join'
// getElementById pour importer un id du HTML

// Je déclare une fonction qui s'appelle joinParty
 function joinParty() {

  const start = document.getElementById('start');
  const game = document.getElementById('game');

  start.style.display = 'none'; //invisible
  game.style.display = 'block'; //visible
  
}

// Tableau vide de mes dominos
var dominos = [];
// Tableau vide de la main du premier joueur
var handPlayerOne = [];
//Tableau vide de la main du deuxième joueur
var handPlayerTwo = [];

// Je crée mes dominos en incrémentant mes images sous forme de chaîne de caractères
function createDominos() {
  //Tant que i vaut 0 et qu'il est inférieur à 28, alors j'incrémente mon index avec + 1
  for (var i = 0; i < 28; i++) {
      dominos[i] = "domino"+i+".png" ;
  }
}

createDominos(dominos); // J'active ma fonction createDominos

function shuffle(a) {
  for (let i = a.length-1; i > 0; i--) {
      const b = Math.floor(Math.random() * (i-1));
      [a[i], a[b]] = [a[b], a[i]];
  }
  return a; // retourne a
}

var myDominos = createDominos();
shuffle(dominos);
console.log(dominos); // console.log me sert à voir l'état de mon code

var handPlayerOne = 7;
var handPlayerTwo = 7;
var turn = 0;

function distribution(array) {
  handPlayerOne = array.splice(array.length - handPlayerOne);
  handPlayerTwo = array.splice(array.length - handPlayerTwo);

  console.log(handPlayerOne);
  console.log(handPlayerTwo);
  
  return array;

}

distribution(dominos);

function alternateTurn() {
if (turn === 0) {
    document.getElementById("handPlayerOne").innerHTML = '<img src="' + handPlayerOne.join('" /><img src="') + '" />';
    handPlayerOne.style.display = 'block';
    handPlayerTwo.style.display = 'none';
  }
 else  {
    document.getElementById("handPlayerTwo").innerHTML = '<img src="' + handPlayerTwo.join('" /><img src="') + '" />';
    handPlayerOne.style.display = 'none';
    handPlayerTwo.style.display = 'block';
  }

}

function btnDraw() {
  if (turn === 1) {
      handPlayerOne.push(dominos[0]);
      dominos.splice(0,1);
      turn = 0;  
      }
   
else if (turn === 0) {
      handPlayerTwo.push(dominos[0]);
      dominos.splice(0,1);
      turn = 1;
      }

  alternateTurn();
  console.log(alternateTurn);

    }

  document.getElementById('btnDraw').addEventListener('dblclick', function() {
  btnDraw();

    })
    
  
    
      


    
  document.getElementById("handPlayerOne").innerHTML = '<img src="' + handPlayerOne.join('" /><img src="') + '" />';
  document.getElementById("handPlayerTwo").innerHTML = '<img src="' + handPlayerTwo.join('" /><img src="') + '" />';