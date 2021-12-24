function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = randChoice(randToRPSint());
    console.log('Computer choice : ', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    rpsFrontend(yourChoice.id, botChoice,message)
}

function randToRPSint() {
    return Math.floor(Math.random() * 3);
}

function randChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }
    };

    var yourScore = rpsDatabase[yourChoice] [computerChoice];
    var computerScore = rpsDatabase[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'You lost!',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'You tied!',
            'color': 'yellow'
        };
    } else {
        return {
            'message': 'You Won!',
            'color': 'green'
        };
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 1px 2px 30px rgba(37, 50, 233, 0.8);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" +finalMessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 1px 2px 30px rgba(243, 38, 24, 0.8);'>"
    
    
    document.getElementById('image').appendChild(humanDiv);
    document.getElementById('image').appendChild(messageDiv);
    document.getElementById('image').appendChild(botDiv);

}