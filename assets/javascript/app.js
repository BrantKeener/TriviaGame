
let triviaQuestions = [
    {
    count : 1,
    question : 'A top fuel dragster consumes how much Nitro-Methane every second?',
    answer : '11.5 gallons',
    },
    {
    count : 2,
    question : 'What is the top speed reached by a top fuel dragster?',
    answer : '336.57 MPH',
    },
    {
    count : 3,
    question : 'How many cubic feet per minute (CFM) of air is forced into the supercharger at full throttle?',
    answer : '3000 CFM',
    },
    {
    count : 4,
    question : 'What is the difference between a supercharger and a turbocharger?',
    answer : "A supercharger is driven by the engine directly, a turbocharger is driven by the engine's exhaust gas",
    },
    {
    count : 5,
    question : 'A Top Fuel Dragster can exceed 300 MPH in approximately how many seconds?',
    answer : '4.5',
    },
];

let growingHeight = 150;
let growingWidth = 235;

$(document).ready(function() {

    $('.trivia_boxes').click(function(){
        growBoxStart(event.target.id);
    });
    
    function growBoxStart(e){
        $('#' + e).addClass('selectedTrivia');
        $('.selectedTrivia').css({'position':'absolute', 'top':'10px', 'left':'230px'});
        setInterval(boxGrow, 5);
    }
    function boxGrow(){
        if(growingHeight < 451){
            $('.selectedTrivia').css({'height': growingHeight + 'px'});
        };
        if(growingWidth < 1076){
            $('.selectedTrivia').css({'width':growingWidth + 'px'});
        };
        growingHeight += 3;
        growingWidth += 10;
    };

    function populateQCards() {
        for(let i = 1; i < triviaQuestions.length + 1; i++){
            $('#box' + i).text('Question 1');
        };
    };

    populateQCards();





});