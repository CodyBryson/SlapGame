// global variables
let healthVariable = 0
let hitCounter = 0
let enemy
// attack type object dictionary
let attackType = {
  punch: {
    name: 'punch',
    damage: 20,
  },
  slap: {
    name: 'slap',
    damage: 10
  },
  kick: {
    name: 'kick',
    damage: 15
  }
}
//enemy type object dictionary
let enemyType = {
  zangief: {
    name: 'Zangief',
    health: 250,
    img: '<img src="Zangiefrender.png" alt="" class="img-fluid" srcset=""></img>'
  },
  bison: {
    name: 'M. Bison',
    health: 175,
    img: '<img src="Bisonrender.png" alt="" class="img-fluid" srcset=""></img>'
  }
}



function play(attack) {
  //player attack
  let playerChoice = attackType[attack].damage

  // health id
  healthVariable -= playerChoice
  hitCounter++
  if (healthVariable <= 0) {
    fightResults()
  }

  drawHealth()
  drawHitCounter()
}
// draw health
function drawHealth() {
  document.getElementById('health').innerText = healthVariable.toString()
}
drawHealth()

//draw hit counter
function drawHitCounter() {
  document.getElementById('hitcounter').innerText = hitCounter.toString()
}

//call random enemy
function randomEnemy() {
  let index = Math.floor(Math.random() * 2)
  if (index < 1) {
    enemy = enemyType.zangief
  }
  else {
    enemy = enemyType.bison
  }

  drawEnemy()


}
// removed bracket
function drawEnemy() {
  healthVariable = enemy.health
  document.getElementById('portrait').innerHTML = enemy.img
  document.getElementById('enemyname').innerText = enemy.name.toString()
  drawHealth();
}

function fightResults() {
  document.getElementById('gamecontrols').classList.add("hidden")
  document.getElementById('portrait').classList.add("card-dark")
  document.getElementById('portrait').innerHTML = '<img src="SoggyJoyousCockatiel-max-14mb.gif" alt="" class="img-fluid" srcset=""></img>'

  setTimeout(() => {
    document.getElementById('portrait').innerHTML = '<img src="fight.png" alt="" class="img-fluid" srcset=""></img>'
  }, 3000);
  setTimeout(() => {
    document.getElementById('portrait').classList.remove("card-dark")
    document.getElementById('gamecontrols').classList.remove("hidden")
    randomEnemy()
  }, 4000);
}
randomEnemy()