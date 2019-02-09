beginGameClick = () => {
    //Je détermine quel joueur commence
    const determineStart = Math.floor(Math.random() * 2)
    const choice = Math.floor(Math.random() * 6)

    //Pousse une tuile aléatoire dans mon tableau
    if (determineStart === 0) {
      console.log(`player begins`)
      this.state.board.push(this.state.player[choice])
      this.state.player[choice].used = true
    } else {
      console.log(`computer begins`)
      this.state.board.push(this.state.computer[choice])
      this.state.computer[choice].used = true
    }
   }



const dominosDeck = [
  {left: 0, right: 0, id: 100, used: false},
  {left: 0, right: 1, id: 101, used: false}, {left: 1, right: 1, id: 102, used: false},
  {left: 0, right: 2, id: 103, used: false}, {left: 1, right: 2, id: 104, used: false}, {left: 2, right: 2, id: 105, used: false},
  {left: 0, right: 3, id: 106, used: false}, {left: 1, right: 3, id: 107, used: false}, {left: 2, right: 3, id: 108, used: false}, {left: 3, right: 3, id: 109, used: false},
  {left: 0, right: 4, id: 110, used: false}, {left: 1, right: 4, id: 111, used: false}, {left: 2, right: 4, id: 112, used: false}, {left: 3, right: 4, id: 113, used: false}, {left: 4, right: 4, id: 114, used: false},
  {left: 0, right: 5, id: 115, used: false}, {left: 1, right: 5, id: 116, used: false}, {left: 2, right: 5, id: 117, used: false}, {left: 3, right: 5, id: 118, used: false}, {left: 4, right: 5, id: 119, used: false}, {left: 5, right: 5, id: 120, used: false},
  {left: 0, right: 6, id: 121, used: false}, {left: 1, right: 6, id: 122, used: false}, {left: 2, right: 6, id: 123, used: false}, {left: 3, right: 6, id: 124, used: false}, {left: 4, right: 6, id: 125, used: false}, {left: 5, right: 6, id: 126, used: false}, {left: 6, right: 6, id: 127, used: false},

];
 //Choisissez une tuile aléatoire pour commencer la ligne de jeu
 var randomTile = this.tiles.splice(Math.floor(Math.random() * this.tiles.length), 1);
 this.lineOfPlay.push(randomTile[0]);
 this.write("Game starting with first tile: " + this.writeBoard());

 this.play(); //Commencement du jeu en alternance


var numPlayers = [];
var playedPieces = [];

var players = numPlayers.length;
var id = consulte['id'];
if (id == 0 && players == 0) {
  id = 1;
  numPlayers.push(1);
  
} else if (id == 0 && players == 1) {
  id = 2;
  numPlayers.push(2);
} else {
  id;
}
console.log("Le joueur" + id + " h. Num players " + numPlayers.length);


//Envoie 7 entrées aléatoires dans le tableau
for (let i = 0; i <= 6; i++) {
  //Sélectionne un nombre aléatoire parmi 28 tuiles au total
  let choice = Math.floor(Math.random() * 28)
  //Pousser les résultats vers un nouveau tableau
  player.push(dominosDeck[choice])
  dominosDeck.slice(choice, choice)
}
//Envoyer 7 entrées aléatoires vers un tableau
for (let i = 0; i <= 6; i++) {
  let choice = Math.floor(Math.random() * 28)
  computer.push(dominosDeck[choice])
  dominosDeck.slice(choice, choice)
}



function Dominoes(){
  this.tiles = [];
  this.lineOfPlay = [];
  this.players = [];

  this.currentPlayer = 0;
  this.playing = true;

  this.init = function(){
    this.initialseTiles();
    this.shuffleTiles();

    this.drawFromStock(0, 7); //Mélange de la main du joueur 1
    this.drawFromStock(1, 7); //Mélange de la main du joueur 2

    //Choisissez une tuile aléatoire pour commencer la ligne de jeu
    var randomTile = this.tiles.splice(Math.floor(Math.random() * this.tiles.length), 1);
    this.lineOfPlay.push(randomTile[0]);
    this.write("Game starting with first tile: " + this.writeBoard());

    this.play(); //Commence à jouer en alternance
  }

  this.initialiseTiles = function(){
    //Remplit le tableau de tuiles
    var n = 0;
    for(var square2 = 0; square2 <= 6; square2++){
      for(var square1 = 0; square1 <= square2; square1++){
        this.tiles[n] = {square1: square1, square2: square2};
        n++;
      }
    }
  }

  /*
  * Mélange les dominos
  */
 this.shuffleTiles = function(){
  var n = this.tiles.length;
  var index;
  var temp;
  while(n > 0){
    index = Math.floor(Math.random() * n);
    n--;

    //Permute le dernier élément avec un élément aléatoire;
    temp = this.tiles[n];
    this.tiles[n] =  this.tiles[index];
    this.tiles[index] = temp;
  }
}

/*
  Pioche des dominos et les ajouter aux mains des joueurs
*/
this.drawFromStock = function(player, numTiles){
  var draw = this.tiles.splice(-numTiles);
  this.players[player].tiles = this.players[player].tiles.concat(draw);
  return draw;
}

this.play = function(){
  while(this.playing){
    var matchLineOfPlay;

    //Parcoure les dominos des joueurs pour déterminer si l'un de leurs carrés correspond au premier ou au dernier carré de la ligne de jeu
    for(var i = 0; i < this.players[this.currentPlayer].tiles.length; i++){
      matchLineOfPlay = this.matchLineOfPlay(this.players[this.currentPlayer].tiles[i]);
      if(matchLineOfPlay) break;
    }

    //Si le joueur pose un domino avec un côté valide, alors la ligne de jeu est prolongée, sinon elle sort du stock
    if(matchLineOfPlay){
      var playedTile = this.players[this.currentPlayer].tiles.splice(i, 1); //Supprime la tuile jouée des tuiles des joueurs
      this.extendLineOfPlay(playedTile[0], matchLineOfPlay);
    }
    else{
      //Continue à récupérer à travers le stock pour un match
      for(var i = this.tiles.length-1; i >= 0; i--){
        matchLineOfPlay = this.matchLineOfPlay(this.tiles[i]);
        if(matchLineOfPlay) break;
      }

      //Si le match est trouvé dans le stock des lignes de jeu, autrement le jeu va se bloquer et la partie se terminera
      if(matchLineOfPlay){
        var drawnTile = this.tiles.splice(i, 1); //Retire le domino pioché
        this.write(this.players[this.currentPlayer].name + " can't play, drawing tile " + this.writeTile(drawnTile[0]));
        this.extendLineOfPlay(drawnTile[0], matchLineOfPlay);
      }
      else{
        this.write(this.players[this.currentPlayer].name + " can't play. No match found in stock. Game is blocked. Exiting...");
        this.exit();
      }
    }
  }
}

this.matchLineOfPlay = function(tile){
  var firstSquare = this.lineOfPlay[0].square1; //Square at the begining of the line of play
  var lastSquare = this.lineOfPlay[this.lineOfPlay.length-1].square2; //Square at the end of the line of play

  if(tile.square1 == firstSquare || tile.square2 == firstSquare){
    return {
      connectingTile: this.lineOfPlay[0], //the tile in the line of play that matches
      position: 'start', //postion of the tile in the line of play that matches
      turnTile: (tile.square1 == firstSquare) ? true: false //Determine if the tile should be turned so that the squares match
    };
  }
  else if(tile.square1  == lastSquare || tile.square2 == lastSquare){
    return {
      connectingTile: this.lineOfPlay[this.lineOfPlay.length-1], //the tile in the line of play that matches
      position: 'end', //postion of the tile in the line of play that matches
      turnTile: (tile.square2 == lastSquare) ? true: false //Determine if the tile should be turned so that the squares match
    };
  }
  return null;
}

this.extendLineOfPlay = function(tile, matchData){
  if(matchData.turnTile) tile = this.turnTile(tile) //If connecting squares do not match, turn tile so that connecting squares match

  if(matchData.position == 'start') this.lineOfPlay.unshift(tile); //extend line of play at the beginning
  else if(matchData.position == 'end') this.lineOfPlay.push(tile); //extend line of play at the end

  this.write(this.players[this.currentPlayer].name + " plays " + this.writeTile(tile) + " to connect to tile " + this.writeTile(matchData.connectingTile) + " on the board ");
  this.write("Board is now: " + this.writeBoard());

  //If player has no more tiles, player has won. Exit game.
  if(this.players[this.currentPlayer].tiles.length < 1){
    this.write("Player " + this.players[this.currentPlayer].name + " has won!");
    this.exit();
  }
  this.alternatePlayer();
}

//Alternate player
this.alternatePlayer = function(){
  if(this.currentPlayer == 0) this.currentPlayer = 1;
  else if(this.currentPlayer == 1) this.currentPlayer = 0;
}

//Turn the squares in the tile to match line of play
this.turnTile = function(tile){
  return {square1: tile.square2, square2: tile.square1};
}

//Output the line of play
this.writeBoard = function(){
  var textBox = [];
  var _self = this;
  this.lineOfPlay.forEach(function(tile){
    textBox.push(_self.writeTile(tile));
  });
  return textBox.join(" ");
}

//Output the tile
this.writeTile = function(tile){
  return "<" + tile.square1 + ":" + tile.square2 + ">";
}

//Send to stdout
this.write = function(msg){
  //console.log(msg);
  if(typeof process !== 'undefined') process.stdout.write(msg + '\n');
  else if(typeof document !== 'undefined') document.write(msg + "<br>");
}
 
this.exit = function(msg){
  this.playing = false;
  if(typeof process !== 'undefined') process.exit(0);
}
}

var dominoes = new Dominoes();
