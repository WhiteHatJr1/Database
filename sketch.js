var database;
var gamestate = 0;
var playerCount;
var form, player, game;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    
    //playerCount = 0;

    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){
    background("gray");

    
   
    }
