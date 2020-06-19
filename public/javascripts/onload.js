
const suites = ['d', 'c', 'h', 's']
const numbers = 13
var mydeck = ''
var playerDeck = ''
var adversaryDeck = ''
var playerSelection = ''
var adversarySelection = ''
var playerPoints = 0
var adversaryPoints = 0

// map Dom
const adversaryList = document.getElementById('adversaryList')
const playerList = document.getElementById('playerList')
const player_cards = document.getElementById('playerCards').children
const adversary_cards = document.getElementById('adversaryCards').children
const player_inplay = document.getElementById('playerplayed')
const adversary_inplay = document.getElementById('adversaryplayed')
const moves_list = document.getElementById('moves')

newDeck()

document.addEventListener('DOMContentLoaded', () => {

    // populate DOM
    addOption(adversaryList, adversaryDeck)
    addOption(playerList, playerDeck)
    addListenerToCards(player_cards)
    dealCards(adversary_cards, adversaryDeck)
    dealCards(player_cards, playerDeck)

})