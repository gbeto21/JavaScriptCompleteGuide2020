const ATTACT_VALUE = 10
const MONSTER_ATTACT_VALUE = 14
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20

const MODE_ATTACT = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'

const enteredValue = prompt('Maximon life for you and the monster.', '100')

let chosenMaxLife = parseInt(enteredValue)
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function reset() {
    currentMonsterHealth = chosenMaxLife
    currentPlayerHealth = chosenMaxLife
    resetGame(chosenMaxLife)
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACT_VALUE)
    currentPlayerHealth -= playerDamage

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHealth
        setPlayerHealth(initialPlayerHealth)
        alert('You would be dead but the bunos life saved you!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!')
        reset()
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!')
        reset()
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
        reset()
    }
}

function attactMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACT) {
        maxDamage = ATTACT_VALUE
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE
    }

    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage
    endRound()
}

function attackHandler() {
    attactMonster(MODE_ATTACT)
}

function stringAttackHandler() {
    attactMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
    let healValue
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more that your max initial health.")
        healValue = chosenMaxLife - currentPlayerHealth
    } else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue
    endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', stringAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)