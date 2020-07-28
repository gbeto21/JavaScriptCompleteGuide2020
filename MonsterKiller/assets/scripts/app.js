const ATTACT_VALUE = 10
const MONSTER_ATTACT_VALUE = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackHandler() {
    const damage = dealMonsterDamage(ATTACT_VALUE)
    currentMonsterHealth -= damage

    const playerDamage = dealPlayerDamage(MONSTER_ATTACT_VALUE)
    currentPlayerHealth -= playerDamage

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!')
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!')
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
    }
}

attackBtn.addEventListener('click', attackHandler)
