
let triviaQuestions = [
    {
    count : 1,
    question : 'A top fuel dragster consumes how much Nitro-Methane every second?',
    correctAnswer : '11.5 gallons',
    answerChoices : ['1 gallon', '3.6 gallons', '11.5 gallons'],
    },
    {
    count : 2,
    question : 'What is the top speed reached by a top fuel dragster?',
    correctAnswer : '336.57 MPH',
    answerChoices : ['154.87 MPH', '230.88 MPH', '336.57 MPH'],
    },
    {
    count : 3,
    question : 'How many cubic feet per minute of air is forced into the supercharger at full throttle?',
    correctAnswer : '3000 CFM',
    answerChoices : ['1500 CFM', '50,000 CFM', '3000 CFM']
    },
    {
    count : 4,
    question : 'What is the difference between a supercharger and a turbocharger?',
    correctAnswer : "Turbochargers=exhaust gas driven, Superchargers=direct drive",
    answerChoices : ['Superchargers are from Krypton', 'Turbocharges make airplanes fly', "Turbochargers=exhaust gas driven, Superchargers=direct drive"],
    },
    {
    count : 5,
    question : 'A Top Fuel Dragster can exceed 300 MPH in approximately how many seconds?',
    correctAnswer : '4.5 seconds',
    answerChoices : ['1 second', '9 seconds', '4.5 seconds'],
    },
];

let growingHeight = 150;
let growingWidth = 235;
let question = "";
let corrects = 0;
let incorrects = 0;
let totalAnswers = 0;
let boxIDs = ['box1', 'box2', 'box3', 'box4', 'box5'];
let qDivs = ['q1', 'q2', 'q3', 'q4', 'q5'];
let timerGo = "";
let grower = '';
let timerRunning = false;

$(document).ready(function() {

    function fullReset() {
        $('.correct').text('Correct Answers: 0');
        $('.incorrect').text('Incorrect Answers: 0');
        totalAnswers = 0;
        corrects = 0;
        incorrects = 0;
        question = "";
        
        triviaBoxClickSet();
        populateQCards();
    };

    function midGameReset() {
        question = "";
        growingHeight = 150;
        growingWidth = 235;
        if(totalAnswers === 4) {
            if(corrects > incorrects) { 
                alert("You've Won!");
                location.reload();
            } else {
                alert("You've Lost!");
                location.reload();
            };
        };
    };
    
    function triviaBoxClickSet() {
        $('.trivia_boxes').click(function(){
            growBoxStart(event.target.id);
            questionLabelRemove(event.target.id);
            questionLabelMove(event.target.id);
            timerControl();
        });
    };
    
    $('.choice_buttons').click(function() {
        timerControl();
        checkButton(event.target.id);
        setTimeout(boxClear, 3000);
    });

    function growBoxStart(e){
        $('#' + e).addClass('selectedTrivia');
        $('.selectedTrivia').css({'position':'absolute', 'top':'10px', 'left':'230px'});
        growBoxInterval();
    };

    function growBoxInterval(e) {
        if(e === undefined) {
            grower = setInterval(boxGrow, 5);
        } else {
            clearInterval(grower);
            grower = '';
        };
    };

    function boxGrow(){
        if(growingHeight < 451){
            $('.selectedTrivia').css({'height': growingHeight + 'px'});
        } else {
            growBoxInterval(1);
        };
        if(growingWidth < 1076){
            $('.selectedTrivia').css({'width':growingWidth + 'px'});
        };
        console.log('running!');
        growingHeight += 3;
        growingWidth += 10;
    };

    function populateQCards() {
        for(let i = 1; i < 6; i++) {
            let classBuilder = 'questLab' + i;
            let labelBuilder = 'Question' + i;
            $('#q' + i).append('<p class=' + classBuilder + '>' + labelBuilder + '</p>');
        };
    };

    populateQCards();

    function questionLabelMove(e) {
        switch(e) {
            case 'box1' : 
                question = '0'
                setTimeout(questionPost, 500)
                break;
            case 'box2' :
                $('.questLab2').addClass('questLab1')
                $('.questLab2').removeClass('questLab2')
                question = 1
                setTimeout(questionPost, 500)
                break;
            case 'box3' :
                $('.questLab3').addClass('questLab1')
                $('.questLab3').removeClass('questLab3')
                question = 2
                setTimeout(questionPost, 500)
                break;
            case 'box4' :
                $('.questLab4').addClass('questLab1')
                $('.questLab4').removeClass('questLab4')
                question = 3
                setTimeout(questionPost, 500)
                break;
            case 'box5' :
                $('.questLab5').addClass('questLab1')
                $('.questLab5').removeClass('questLab5')
                question = 4
                setTimeout(questionPost, 500)
                break;
        };
    };

    function questionLabelRemove(e) {
        switch(e) {
            case 'box1' :
                $('.questLab2').remove();
                $('.questLab3').remove();
                $('.questLab4').remove();
                $('.questLab5').remove();
                break;
            case 'box2' :
                $('.questLab1').remove();
                $('.questLab3').remove();
                $('.questLab4').remove();
                $('.questLab5').remove();
                break;
            case 'box3' :
                $('.questLab1').remove();
                $('.questLab2').remove();
                $('.questLab4').remove();
                $('.questLab5').remove();
                break;
            case 'box4' :
                $('.questLab1').remove();
                $('.questLab2').remove();
                $('.questLab3').remove();
                $('.questLab5').remove();
                break;
            case 'box5' :
                $('.questLab1').remove();
                $('.questLab2').remove();
                $('.questLab3').remove();
                $('.questLab4').remove();
                break;
        };
    };

    function questionPost() {
        $('.questLab1').append('<p>' + triviaQuestions[question].question + '</p>')
        answerBuild(question);
    };

    function answerBuild(question) {
        let answerArray = [];
        for(let i = 0; i < 3; i++) {
            let arrayPushing = Math.floor(Math.random() * triviaQuestions[question].answerChoices.length);
            answerArray.push(triviaQuestions[question].answerChoices[arrayPushing]);
            triviaQuestions[question].answerChoices.splice(arrayPushing, 1);
        };
        for(let i = 0; i < 3; i++) {
            let classMachine = 'answer' + i;
            $('.questLab1').append('<p class=' + classMachine + '>' + answerArray[i] + '</p>');
        };
    };

    function checkButton(e) {
        let answerText = document.getElementsByTagName('p');
        if(e === 'redButton') {
            if(answerText[2].innerHTML === triviaQuestions[question].correctAnswer) {
                correctAnswerIncrease();
            } else {
                incorrectAnswerIncrease();
            }
        };
        if(e === 'blueButton') {
            if(answerText[3].innerHTML === triviaQuestions[question].correctAnswer) {
                correctAnswerIncrease();
            } else {
                incorrectAnswerIncrease();
            }
        };
        if(e === 'yellowButton') {
            if(answerText[4].innerHTML === triviaQuestions[question].correctAnswer) {
                correctAnswerIncrease();
            } else {
                incorrectAnswerIncrease();
            }
        };
    };

    function correctAnswerIncrease() {
        $('.correct').text('Correct Answers: ' + ++corrects);
        correctAnswerHighlight();
        let correctSound = new Audio('assets/sounds/Ticket-machine-sound.mp3');
        correctSound.play();
        setTimeout(midGameReset, 1500);
    };

    function incorrectAnswerIncrease() {
        $('.incorrect').text('Incorrect Answers: ' + ++incorrects);
        correctAnswerHighlight();
        let incorrectSound = new Audio('assets/sounds/Wrong-answer-sound-effect.mp3');
        incorrectSound.play();
        setTimeout(midGameReset, 1500);
    };

    function correctAnswerHighlight() {
        let answerText = document.getElementsByTagName('p');
        for(let i = 2; i < 5; i++) {
            if(answerText[i].innerHTML !== triviaQuestions[question].correctAnswer) {
                $(answerText[i]).css({'color' : 'red', 'opacity' : '0.2'});
            };
        };
    };

    function boxClear() {
        qDivs.forEach(function(item) {
            $('#' + item).empty(); 
        });
        qDivs.forEach(function(item) {
            $('#' + item).append('<img class="trivia_boxes" src="assets/images/blue_box.jpg">');
        });
        for(let i = 0; i < 5; i++) {
            let imageGrab = document.getElementsByTagName('img')
            imageGrab[i].setAttribute('id', 'box' + (i + 1));
        };
        totalAnswers += 1;
        populateQCards();
        triviaBoxClickSet();
    };

    triviaBoxClickSet();

    // Insert function to control timer

    function timerControl() {
        
        let timerStart = "";
       
        if(timerRunning === false) {
            console.log('Start!');
            startTiming();
        } else {
            console.log('stop!');
            stopTiming();
        };

        function startTiming() {
            timerStart = 10;
            timerGo = setInterval(timerDisplay, 1000);
            timerRunning = true;
        };

        function stopTiming() {
            clearInterval(timerGo);
            timerRunning = false;
        };

        function timerDisplay() {
            $('.timer').text('Time Left: ' + timerStart);
            timerStart -= 1;
            let timerText = $('.timer');
            let innerText = timerText[0].innerHTML;
            timeUp(innerText);
        };
    };

    function timeUp(e) {
        console.log(e.charAt(11));
        if(e.charAt(11) === '0') {
            timerControl();
            let incorrectSound = new Audio('assets/sounds/Wrong-answer-sound-effect.mp3');
            incorrectSound.play();
            incorrectAnswerIncrease();
        };
    };
});