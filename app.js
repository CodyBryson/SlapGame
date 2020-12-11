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
let enemyType = [
  {
    name: 'Zangief',
    health: 350,
    img: '<img src="Zangiefrender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 1
  },
  {
    name: 'M. Bison',
    health: 200,
    img: '<img src="Bisonrender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 2
  },
  {
    name: 'Akuma',
    health: 275,
    img: '<img src="Akumarender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 3
  },
  {
    name: 'Cammy',
    health: 150,
    img: '<img src="Cammyrender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 4
  },
  {
    name: 'Chun-Li',
    health: 175,
    img: '<img src="Chunrender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 5
  },
  {
    name: 'E.Honda',
    health: 375,
    img: '<img src="Ehonda.png" alt="" class="img-fluid" srcset=""></img>',
    id: 6
  },
  {
    name: 'Ryu',
    health: 50,
    img: '<img src="Ryurender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 7
  },
  {
    name: 'Sagat',
    health: 200,
    img: '<img src="Sagatclean.png" alt="" class="img-fluid" srcset=""></img>',
    id: 8
  },
  {
    name: 'Ken',
    health: 75,
    img: '<img src="Kenrender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 9
  },
  {
    name: 'Ibuki',
    health: 250,
    img: '<img src="Ibukirender.png" alt="" class="img-fluid" srcset=""></img>',
    id: 10
  }
]



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
  let index = Math.floor(Math.random() * 10)
  enemy = enemyType[index]

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