function deck() {

    var playdeck = []

    for (i = 0; i < suites.length; i++) {
        for (j = 1; j <= numbers; j++) {
            playdeck.push(
                {
                    'value': j,
                    'suite': suites[i]
                }
            )
        }
    }

    playdeck.sort(() => {
        return 0.5 - Math.random();
    })

    var half_length = Math.ceil(playdeck.length / 2);
    var computer = playdeck.splice(0, half_length);

    return {
        player: playdeck,
        computer: computer
    }
}

function newDeck() {
    playerSelection = ''
    adversarySelection = ''
    playerPoints = 0
    adversaryPoints = 0

    mydeck = deck();
    playerDeck = mydeck.player
    adversaryDeck = mydeck.computer
    moves_list.innerHTML=''
    player_inplay.innerHTML = ''
    adversary_inplay.innerHTML = ''

}