function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn" +i,choices[i]);
        }
        showProgress();
    }
};

function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    var currentQuestionIndex = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionIndex + " of " + quiz.questions.length;
}

function showScores(){
    var questionsOver = "<h2>Result</h2>";
    var btnRetake = "<a href='prof-level.html'> <button  type='Submit' id='btnOp'> Retake </button>";
    var btnReview = "<a href='reviewer.html'> <button  type='Submit' id='btnOp'> Review </button>";
    questionsOver += "<h3 id='score'> Your score: " + quiz.score + "</h3>"
    + btnRetake + btnReview;
    var element = document.getElementById("quiz");
    element.innerHTML = questionsOver;
};


var questions = [
    /* Question - Choices [Array] - Answer */
    new Question ("1. Which sentence uses “famish” correctly?", ["1. After the straight exam, I felt too exhausted and famished to eat my favourite foods." ,"2. I could eat a horse, I am famish now." ,"3. I famished my stomach next time you treat me to a meal out." ,"4. I will bring lots of pizza, that’s a famish."] ,"1. After the straight exam, I felt too exhausted and famished to eat my favourite foods."),
    new Question ("2. Priscila _______ rather not invest her savings in the stock market.", ["1. must" ,"2. has to" ,"3. could" ,"4. would"] , "4. would"),
    new Question ("3. Did you have any problem ______ our house?", ["1. search" ,"2. to search" ,"3. searching" ,"4. for searching"] , "3. searching"),
    new Question ("4. I hope you don’t mind _____ joining you.", ["1. to be" ,"2. I had been" ,"3. that I may" ,"4. me"] , "4. me"),
    new Question ("5. Most basketball players are 6 ____ tall or more.", ["1. foot" ,"2. feet" ,"3. foots" ,"4. feets"] , "2. feet"),
];
    
var quiz = new Quiz(questions);

populate();                                 