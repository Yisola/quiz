const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "According to Greek mythology, who was the first woman on earth?",
        answers: {
            a: "Crockford",
            b: "Sheryl",
            c: "Pandora"
        },
        correctAnswer: "c"
    },
    {
        question: "Which African country was formerly known as Abyssinia?",
        answers: {
            a: "Ethiopia",
            b: "Ghana",
            c: "Nigeria"
        },
        correctAnswer: "a"
    },
    {
        question: "Which country consumes the most chocolate per capital?",
        answers: {
            a: "Japan",
            b: "Korea",
            c: "Spain",
            d: "Switzerland"
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
    // variable to store output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of options
            const answers = [];

            // for each available answer
            for (letter in currentQuestion.answers) {
                // add HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                );
            }

            // add this question and its answer to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // combine output list into one string of HTML
    quizContainer.innerHTML = output.join('');
}

// display quiz right away
buildQuiz();

function showResults() {
    // get answer container from quiz
    const answerContainer = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}







