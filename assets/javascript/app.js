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
        correctAnswer: "d"
    },
    {
        question: "q?",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer",
        },
        correctAnswer: "d"
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

var selected = [];



$("#start").click(function showQuestions() {
    $("#startBtn").empty();

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

        var selValue1= $('input[name=question0]:checked').val();
        var selValue2= $('input[name=question1]:checked').val();
        var selValue3= $('input[name=question2]:checked').val();
        var selValue4= $('input[name=question3]:checked').val();
        var selValue5= $('input[name=question4]:checked').val();
        var selValue6= $('input[name=question5]:checked').val();
        var selValue7= $('input[name=question6]:checked').val();
        var selValue8= $('input[name=question7]:checked').val();

    console.log(selValue1, selValue2, selValue3, selValue4, selValue5, selValue6, selValue7, selValue8)

    for(let [i, question] of myQuestions.entries()){      
        guess = $('input[name=question'+ i+']:checked').val();
        console.log(guess)
        console.log(question.correctAnswer)
    }

});




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