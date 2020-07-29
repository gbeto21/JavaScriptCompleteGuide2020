const ATTACT_VALUE = 10
const MONSTER_ATTACT_VALUE = 14
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20

const MODE_ATTACT = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_MONSTER_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'

const enteredValue = prompt('Maximon life for you and the monster.', '100')

let chosenMaxLife = parseInt(enteredValue)
let battleLog = []

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function writeToLong(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    }

    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER'
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    else if (event === LOG_EVENT_MONSTER_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    battleLog.push(logEntry)
}

function reset() {
    currentMonsterHealth = chosenMaxLife
    currentPlayerHealth = chosenMaxLife
    resetGame(chosenMaxLife)
}

function endRound() {

    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACT_VALUE)
    currentPlayerHealth -= playerDamage
    writeToLong(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    )

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHealth
        setPlayerHealth(initialPlayerHealth)
        alert('You would be dead but the bunos life saved you!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!')
        writeToLong(
            LOG_EVENT_MONSTER_ATTACK,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
        reset()
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!')
        writeToLong(
            LOG_EVENT_MONSTER_ATTACK,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
        reset()
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
        writeToLong(
            LOG_EVENT_MONSTER_ATTACK,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        )
        reset()
    }
}

function attactMonster(mode) {
    let maxDamage;
    let logEvent
    if (mode === MODE_ATTACT) {
        maxDamage = ATTACT_VALUE
        logEvent = LOG_EVENT_PLAYER_ATTACK
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    }

    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage
    writeToLong(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    )
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
    writeToLong(
        LOG_EVENT_MONSTER_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound()
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', stringAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)