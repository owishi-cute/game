let character = document.querySelector(".character");
let enemy = document.querySelector(".enemy");
let checkHit, canRegen = false;
let enemyHitTime, newBullet;
function dodge(){
  let dodgeBtn = document.querySelector(".dodgeBtn");
  if (character.classList != "jumpAnimate"){
    character.classList.add("jumpAnimate")
  }
  dodgeBtn.disabled = true;
  setTimeout(()=>{
    dodgeBtn.disabled = false;
    character.classList.remove("jumpAnimate");
  },1000)
}

function attack(){
  let atkBtn = document.querySelector(".attackBtn");
  let mainDiv = document.querySelector(".main");
  let getCharPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if(getCharPos == 250){
  bulletConstructorPlayer(mainDiv, "playerBullet", "25");
  atkBtn.disabled = true;
  setTimeout(()=>{
    atkBtn.disabled = false;
  },1000)
  }
}
function coreGaming(gaming){
 console.log(gaming)
}
function bulletConstructorPlayer(pos, type, dmg){
 let bulletInfo = new Bullet(pos, type, dmg);
 if(bulletInfo.type == "playerBullet"){
  newBullet = document.createElement('div');
  newBullet.classList.add(bulletInfo.type);
  newBullet.classList.add(bulletInfo.dmg);
  newBullet.classList.add("bullet")
  pos.appendChild(newBullet);
  detectBulletHit(bulletInfo.
  pos, bulletInfo.type, bulletInfo.dmg)
 }
}



function detectBulletHit(pos, type, dmg){
  setInterval(()=>{
    let detectHit = parseInt(window.getComputedStyle(newBullet).getPropertyValue("right"));
    let detectHitBullet = parseInt(window.getComputedStyle(newBullet).getPropertyValue("left"))
    let detectEnemyHitLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    let detectEnemyHitTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
    let getEnemyHP = parseInt(enemy.id) - dmg;
    if(detectHit < 20){
      pos.removeChild(newBullet);
    }
    if((detectHitBullet) >= (detectEnemyHitLeft - enemy.style.width) && detectEnemyHitTop == 250){
      enemy.id = getEnemyHP;
      pos.removeChild(newBullet)
      enemy.textContent = enemy.id;
      canRegen = false
      
      document.querySelector(".enemy").style.backgroundColor = "red";
      setTimeout(()=>{
       document.querySelector(".enemy").style.backgroundColor = "white";
      },10)
    }
    if(enemy.id<=0){
     enemy.remove()
    }
  },10)
  }


function enemyHit(){
 if(enemy.id != checkHit){
  canRegen = false;
  setTimeout(()=>{
   canRegen = true;
   checkHit = enemy.id
  },5000)
  
 }
 checkHit = enemy.id
}

function enemyRegen(){
  setInterval(()=>{
   if(enemy.id > 90 && enemy.id <= 100){
    enemy.id = (100 - parseInt(enemy.id)) +(parseInt(enemy.id))
   }else if (enemy.id <100 && canRegen) {
    enemy.id = (parseInt(enemy.id) + 10).toString();
    checkHit = enemy.id
   }
   enemy.textContent = enemy.id;
   enemyHit()
  }, 1000)
}

 enemyRegen()
