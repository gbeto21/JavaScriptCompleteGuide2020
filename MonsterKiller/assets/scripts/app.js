const ATTACT_VALUE = 10

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackHandler(){
    const damage = dealMonsterDamage(ATTACT_VALUE)
    currentMonsterHealth -= damage
}

attackBtn.addEventListener('click', attackHandler)
