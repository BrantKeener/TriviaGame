
let triviaQuestions = [
    {
    count : 1,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 2,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 3,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 4,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 5,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 6,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 7,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 8,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 9,
    question : 'bla',
    answer : 'bla',
    },
    {
    count : 10,
    question : 'bla',
    answer : 'bla',
    },
];

let growingHeight = 150;
let growingWidth = 235;

$(document).ready(function() {

    $('#box1').click(function(){
        growBoxStart();
    });
    
    function growBoxStart(){
        $('#box1').addClass('selectedTrivia');
        $('.selectedTrivia').css({'position':'absolute'});
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





});