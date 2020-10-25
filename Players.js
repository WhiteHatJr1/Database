class Players{
    constructor(){

    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value", function(data){
            playerCountref = data.val()
    });
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    
    update(name){
       var playerIndex = "p" + playerCount;
       database.ref(playerIndex).set({
           name: name
       });
    }
}