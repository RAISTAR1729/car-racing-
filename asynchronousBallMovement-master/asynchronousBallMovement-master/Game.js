class Game{
constructor(){

}
getState(){
    var gamestateRef=database.ref("gameState")
    gamestateRef.on("value",function(data){
    gameState=data.val();
    })
}
update(state){
database.ref("/").update({
gameState:state
})




}
async start(){
if(gameState===0){
player=new Player();
var playerCountRef=await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
playerCount=playerCountRef.val()
player.getCount()
}

form=new Form()
form.display()

}
}
play(){
form.hide();
text("gameStart",250,250);
Player.getPlayerInfo()
if(allPlayers!==undefined){
var DisplayPosition=200
for(var plr in allPlayers){
if(plr==="player"+player.index){
fill("red")
}
else{
fill("black")
}

text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,DisplayPosition)

}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance=player.distance+50
player.update()
}
}

}


