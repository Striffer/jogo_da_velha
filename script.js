let player1 = ''
let player2 = ''

const playerTurn = document.getElementById('player-turn')
const btnA1Text = document.getElementById('btn-a1')
const btnA2Text = document.getElementById('btn-a2')
const btnA3Text = document.getElementById('btn-a3')
const btnB1Text = document.getElementById('btn-b1')
const btnB2Text = document.getElementById('btn-b2')
const btnB3Text = document.getElementById('btn-b3')
const btnC1Text = document.getElementById('btn-c1')
const btnC2Text = document.getElementById('btn-c2')
const btnC3Text = document.getElementById('btn-c3')

function win (btn1, btn2, btn3) {
    if (btn1.innerText === 'X' && btn2.innerText === 'X' && btn3.innerText ==='X') {
        playerTurn.innerText = player1 + ', você venceu!'
        btn1.style.color = '#00FF00'
        btn2.style.color = '#00FF00'
        btn3.style.color = '#00FF00'

    } else if (btn1.innerText === 'O' && btn2.innerText === 'O' && btn3.innerText ==='O') {
        playerTurn.innerText = player2 + ', você venceu!'
        btn1.style.color = '#00FF00'
        btn2.style.color = '#00FF00'
        btn3.style.color = '#00FF00'
    }
}

function draw (btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9) {
    if (btn1.innerText !== '' && btn2.innerText !== '' && btn3.innerText !== '' && btn4.innerText !== '' && btn5.innerText !== '' && btn6.innerText !== '' && btn7.innerText !== '' && btn8.innerText !== '' && btn9.innerText !== '') {
        playerTurn.innerText = 'O jogo empatou.'
    }
}

document.getElementById('btn-start').addEventListener('click', function () {
    player1 = prompt('Informe o nome do Jogador 1:')
    player2 = prompt('Informe o nome do jogador2:')    

    playerTurn.innerText = player1 + ', sua vez'
})

document.getElementById('btn-restart').addEventListener('click', function () {
    document.querySelectorAll('.ticTacToeBtn').forEach(function (btn) {
        btn.innerText = ''
        btn.style.color = '#efefef'
    })

    playerTurn.innerText = player1 + ', sua vez'
})

document.getElementById('btn-a1').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnA1Text.innerText === '') {        

        btnA1Text.innerText = 'X'        

        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnA1Text.innerText === '') {

        btnA1Text.innerText = 'O'        

        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnA1Text, btnA2Text, btnA3Text)
    win(btnA1Text, btnB2Text, btnC3Text)
    win(btnA1Text, btnB1Text, btnC1Text)
})

document.getElementById('btn-a2').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnA2Text.innerText === '') {        

        btnA2Text.innerText = 'X'        

        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnA2Text.innerText === '') {

        btnA2Text.innerText = 'O'        

        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnA1Text, btnA2Text, btnA3Text)
    win(btnA2Text, btnB2Text, btnC2Text)
})

document.getElementById('btn-a3').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnA3Text.innerText === '') {        

        btnA3Text.innerText = 'X'

        playerTurn.innerText = player2 + ', sua vez'
    } else if(playerTurn.innerText === player2 + ', sua vez' && btnA3Text.innerText === '') {

        btnA3Text.innerText = 'O'

        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnA1Text, btnA2Text, btnA3Text)
    win(btnA3Text, btnB2Text, btnC1Text)
    win(btnA3Text, btnB3Text, btnC3Text)
})

document.getElementById('btn-b1').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnB1Text.innerText === '') {        

        btnB1Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnB1Text.innerText === '') {

        btnB1Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnB1Text, btnB2Text, btnB3Text)
    win(btnA1Text, btnB1Text, btnC1Text)
})

document.getElementById('btn-b2').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnB2Text.innerText === '') {        

        btnB2Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnB2Text.innerText === '') {

        btnB2Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnB1Text, btnB2Text, btnB3Text)
    win(btnA2Text, btnB2Text, btnC2Text)
    win(btnA1Text, btnB2Text, btnC3Text)
    win(btnA3Text, btnB2Text, btnC1Text)
})

document.getElementById('btn-b3').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnB3Text.innerText === '') {        

        btnB3Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else  if (playerTurn.innerText === player2 + ', sua vez' && btnB3Text.innerText === '') {

        btnB3Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnA3Text, btnB3Text, btnC3Text)
    win(btnB1Text, btnB2Text, btnB3Text)
})

document.getElementById('btn-c1').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnC1Text.innerText === '') {        

        btnC1Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnC1Text.innerText === '') {

        btnC1Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnC1Text, btnB2Text, btnA3Text)
    win(btnA1Text, btnB1Text, btnC1Text)
    win(btnC1Text, btnC2Text, btnC3Text)
})

document.getElementById('btn-c2').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnC2Text.innerText === '') {        

        btnC2Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else  if (playerTurn.innerText === player2 + ', sua vez' && btnC2Text.innerText === '') {

        btnC2Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnC1Text, btnC2Text, btnC3Text)
    win(btnA2Text, btnB2Text, btnC2Text)
})

document.getElementById('btn-c3').addEventListener('click', function () {
    if (playerTurn.innerText === player1 + ', sua vez' && btnC3Text.innerText === '') {        

        btnC3Text.innerText = 'X'
        
        playerTurn.innerText = player2 + ', sua vez'
    } else if (playerTurn.innerText === player2 + ', sua vez' && btnC3Text.innerText === '') {
        
        btnC3Text.innerText = 'O'
        
        playerTurn.innerText = player1 + ', sua vez'
    }

    draw(btnA1Text, btnA2Text, btnA3Text, btnB1Text, btnB2Text, btnB3Text, btnC1Text, btnC2Text, btnC3Text)

    win(btnA3Text, btnB3Text, btnC3Text)
    win(btnA1Text, btnB2Text, btnC3Text)
    win(btnC1Text, btnC2Text, btnC3Text)
})