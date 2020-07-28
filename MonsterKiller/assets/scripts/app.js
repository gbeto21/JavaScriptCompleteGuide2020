const ATTACT_VALUE = 10
const MONSTER_ATTACT_VALUE = 14
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function endRound() {
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

function attactMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACT') {
        maxDamage = ATTACT_VALUE
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE
    }

    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage
    endRound()
}

function attackHandler() {
    attactMonster('ATTACT')
}

function stringAttackHandler() {
    attactMonster('STRONG_ATTACK')
}

function healPlayerHandler() {
    let healValue
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more that your max initial health.")
        healValue = chosenMaxLife - currentPlayerHealth
    }else{
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue
    endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', stringAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)