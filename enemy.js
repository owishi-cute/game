let checkForBullet, bullet, number;

function checkForPlayerBullet(){
 checkForBullet = setInterval(()=>{
  let checkForBullet = document.getElementsByClassName("bullet");
  if(checkForBullet.length > 0){
   bullet = document.querySelector(".bullet");
  
 let bulletDistance = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
 let enemyDistance = parseInt(window.getComputedStyle(enemy).getPropertyValue("left") + (enemy.style.width));
 if(bullet != null && bullet != undefined){
  if((enemyDistance - bulletDistance) <= 60){
   if(number < 100 && number > 50 && !(enemy.classList.contains("jumpAnimateEnemy"))){
   enemy.classList.add("jumpAnimateEnemy")
   setTimeout(()=>{
    enemy.classList.remove("jumpAnimateEnemy")
   },1000)
   }
  }
 }
  }
 }, 10)
}
setInterval(()=>{
 number = Math.floor(Math.random() * 100);
},1000)
checkForPlayerBullet()

class Bullet{
 constructor(pos, type, dmg){
  this.pos = pos;
  this.type = type;
  this.dmg = dmg;
 }
}
