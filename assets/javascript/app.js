//Array of Questions

var myQuestions = [
    {
        question: "What does the scientific name for banana, musa sapientum, mean?",
        answers: {
            a: "Fruit of the apes",
            b: "Fruit of the wise men",
            c: "Fruit of the gods"
        },
        correctAnswer: "b"
    },
    {
        question: "Do bananas sink or float in water?",
        answers: {
            a: "Sink",
            b: "Float",
            c: "Bananas neither sink or float"
        },
        correctAnswer: "b"
    },
    {
        question: "________ is the only place in the U.S. where bananas are grown commercially.",
        answers: {
            a: "Hawaii",
            b: "California",
            c: "Florida",
        },
        correctAnswer: "a"
    },
    {
        question: "How many pounds of bananas does the average American eat annually?",
        answers: {
            a: "40",
            b: "10",
            c: "27",
        },
        correctAnswer: "c"
    },
    {
        question: "A cluster of bananas is called a _______ , and a single banana is called a _______?",
        answers: {
            a: "hand/finger",
            b: "foot/toe",
            c: "pod/seed",
        },
        correctAnswer: "a"
    }
];

//Result variables

var right = 0;
var wrong = 0;
var unanswered= 0;

//Result function

function showResults () {
    $("#timer").empty();
    $("#change-content").hide();
    $("#submit").empty();

        var selValue0= $('input[name=question0]:checked').val();
        if (selValue0 === myQuestions[0].correctAnswer) {
            right++
        } else if (selValue0 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue1= $('input[name=question1]:checked').val();
        if (selValue1 === myQuestions[1].correctAnswer) {
            right++
        } else if (selValue1 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue2= $('input[name=question2]:checked').val();
        if (selValue2 === myQuestions[2].correctAnswer) {
            right++
        } else if (selValue2 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue3= $('input[name=question3]:checked').val();
        if (selValue3 === myQuestions[3].correctAnswer) {
            right++
        } else if (selValue3 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue4= $('input[name=question4]:checked').val();
        if (selValue4 === myQuestions[4].correctAnswer) {
            right++
        } else if (selValue4 === undefined) {
            unanswered++
        } else {
            wrong++
        }

    console.log(selValue0, selValue1, selValue2, selValue3, selValue4)
    console.log(right)
    console.log(wrong)
    console.log(unanswered)

    //Result Display

    $("#results").append('<strong>Correct:</strong> ' + right)
    $("#results").append('<br> <strong>Wrong:</strong> ' + wrong)
    $("#results").append('<br> <strong>Unanswered:</strong> ' + unanswered)
};

//Quiz Function

$("#start").click(function timedQuiz() {
    $("#startBtn").empty();

    //Countdown

    $("#timer").text("You have 60 seconds left!");

    var n = 60;
    var tm = setInterval(countDown,1000);

    function countDown(){
        n--;
        $("#timer").text("You have " + n + " seconds left!");
        if(n == 0){
            clearInterval(tm);
            showResults();
        }
        console.log(n);

        $("#done").click(function stopTimer () {
            clearInterval(tm);
        })

    }

    //Quiz Display

    var answers;

    for (var i = 0; i < myQuestions.length; i++) {
        answers = [];
        $("#change-content").append("<br><strong>" + myQuestions[i].question + "</strong><br>");

        for(letter in myQuestions[i].answers){
            $("#change-content").append(
                '<label>'
                + '<input type="radio" class="radios"name="question'+i+'" value="'+letter+'">'
                //+ letter + ': '
                + "&nbsp; &nbsp;" +myQuestions[i].answers[letter]
                + '</label> <br>'

            ); 

        }
      
    }

    $("#submit").append("<br><button id ='done' class='btn btn-warning'>Submit</button>")  

})

//Submit button function

$(document).on("click","#done",function(){

    showResults();

});
