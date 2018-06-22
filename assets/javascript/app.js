var myQuestions = [
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctAnswer: "a"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctAnswer: "c"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "b"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "c"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "a"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "c"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "a"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "c"
    }
];

var right = 0;
var wrong = 0;
var unanswered= 0;



$("#start").click(function timedQuiz() {
    $("#startBtn").empty();

    $("#timer").text(60);

    var n = 60;
    var tm = setInterval(countDown,1000);

    function countDown(){
        n--;
        $("#timer").text(n);
        if(n == 0){
            clearInterval(tm);
        }
        console.log(n);

        $("#done").click(function stopTimer () {
            clearInterval(tm);
        })
    }

    var answers;

    for (var i = 0; i < myQuestions.length; i++) {
        answers = [];
        $("#change-content").append("<br>" + myQuestions[i].question + "<br>");

        for(letter in myQuestions[i].answers){
            $("#change-content").append(
                '<label>'
                + '<input type="radio" class="radios"name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + myQuestions[i].answers[letter]
                + '</label>'

            ); 

        }
      
    }

    $("#change-content").append("<br>"+"<button id = 'done'>Submit</button")  

})

$(document).on("click","#done",function(){

    $("#timer").empty()
    $("#change-content").hide()

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
        var selValue5= $('input[name=question5]:checked').val();
        if (selValue5 === myQuestions[5].correctAnswer) {
            right++
        } else if (selValue5 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue6= $('input[name=question6]:checked').val();
        if (selValue6 === myQuestions[6].correctAnswer) {
            right++
        } else if (selValue6 === undefined) {
            unanswered++
        } else {
            wrong++
        }
        var selValue7= $('input[name=question7]:checked').val();
        if (selValue7 === myQuestions[7].correctAnswer) {
            right++
        } else if (selValue7 === undefined) {
            unanswered++
        } else {
            wrong++
        }

    console.log(selValue0, selValue1, selValue2, selValue3, selValue4, selValue5, selValue6, selValue7)
    console.log(right)
    console.log(wrong)
    console.log(unanswered)

    $("#results").append('Correct: ' + right)
    $("#results").append('<br> Wrong: ' + wrong)
    $("#results").append('<br> Unanswered: ' + unanswered)

});


//console.log(right)
//console.log(wrong)





//$(document).on("click",".radios", function() {
  //  console.log(("question"+i))
//})



//function check () {
  //  $(".userAns").push()
        

/*'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'>'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
				+ '</label>'*/