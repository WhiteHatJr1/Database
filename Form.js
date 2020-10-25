class Form{
    constructor(){

    }
display(){
 var title = createElement("h2");
 title.html("Car Racing Game");
 title.position(300, 200);

 var input = createInput("name");
 input.position(350, 270);

 var button = createButton("play");
 button.position(350, 290);

 var greeting = createElement("h3.5");

  button.mousePressed(function() {
    button.hide();
    input.hide();

    var name = input.value();

    playerCount += 1;
    player.update(name);
    player.updateCount(playerCount);

    //console.log(playerCount);

    greeting.html("Hello " + name);
    greeting.position(300, 550);
    
  })  


}
}