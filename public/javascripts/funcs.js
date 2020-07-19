function dealCards(card, deck) {
    if (deck.length > 0) {
        for (let c of card) {
            if (c.innerHTML === '') {
                let newCard = deck.shift()
                c.innerHTML = newCard.value + newCard.suite
            }
        }
    }
}


//populate the selects just for show
function addOption(target, list) {
    list.forEach((val) => {
        var opt = document.createElement('option');
        opt.value = val.value + val.suite;
        opt.innerHTML = val.value + val.suite;
        target.appendChild(opt);
    }
    )
}

// pop from the select and
function removeFirstOption() {
    document.getElementById('playerList').remove(0)
}

//show the value of the id
function showId(div) {
    console.log(div.innerHTML)

}


// add listener to player cards
function addListenerToCards(cards) {
    for (c of cards) {
        c.addEventListener("mouseup", (e) => {
            playerSelect(e.target)
        });
    }
}

// player selects and then calls adversaryselect
function playerSelect(el) {
    if (playerSelection === '' && el.innerHTML != '') {
        playerSelection = el.innerHTML
        player_inplay.innerHTML = playerSelection
        el.innerHTML = ''
        adversarySelect()
    }
}

//adversary select calls grantPoint
function adversarySelect() {
    let tmp = []
    let tmp_card = ''
    for (c of adversary_cards)
        if (c.innerHTML != '')
            tmp.push(c)
    if (tmp.length > 0) {
        tmp_card = tmp[Math.floor(Math.random() * tmp.length)]
        adversary_inplay.innerHTML = tmp_card.innerHTML
        adversarySelection = tmp_card.innerHTML
        tmp_card.innerHTML = ''
        grantPoint();
    }
}


//grant point does all the rest :)
function grantPoint() {
    //console.log(adversarySelection + '::' + playerSelection)
    let msg = ''
    compare()
    console.log('adversary < ' + adversaryPoints + '::' + playerPoints + ' >player')

    if (adversaryPoints + playerPoints == 52) {

        if (adversaryPoints > playerPoints)
            msg = 'You LOOSER!!!! \n'
        else
            msg = 'You won \n'

        if (adversaryPoints === playerPoints)
            msg = 'TIE \n'

        if (window.confirm(msg + ' Game is finished. Again?'))
            newDeck();
        else
            //window.alert('your loss!')
            window.location='http://localhost:3000'
            
    }

    dealCards(adversary_cards, adversaryDeck)
    dealCards(player_cards, playerDeck)
    playerSelection = ''
    adversarySelection = ''
}

function compare() {

    let mystringregex = /[a-z]/
    let advnum = parseInt(adversarySelection)
    let plynum = parseInt(playerSelection)

    if (plynum === advnum) {
        advnum = getIndex(adversarySelection.match(mystringregex)[0])
        plynum = getIndex(playerSelection.match(mystringregex)[0])
    }

    if (advnum > plynum) {
        adversaryPoints += 2
        addMove('adv')
    } else {
        playerPoints += 2
        addMove('ply')
    }
}

function getIndex(num) {
    return suites.findIndex((el) => el === num)
}

function addMove(style) {
    let tmp = document.createElement('p')
    tmp.classList.add(style)
    tmp.innerHTML=adversarySelection + " - " + playerSelection
    moves_list.appendChild(tmp)
}