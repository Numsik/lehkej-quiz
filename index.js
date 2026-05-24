const questions = [
    {questions: "Hlavni mesto Ceska ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 1
    },
    {questions: "Hlavni mesto Slovenska ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 3
    },
    {questions: "Hlavni mesto Polska ?",
        answer: ["Praha", "Varšava", "Bratislava"],
        correct: 2
    },
    {questions: "Hlavni mesto Nemecka ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 2
    },
    {questions: "Hlavni mesto Rakouska ?",
        answer: ["Viden", "Berlin", "Bratislava"],
        correct: 1
    }
]

function showQuestion(index) {
  const q = questions[index]

  document.getElementById("question").innerHTML = q.questions
  document.getElementById("answers").innerHTML = q.answer
    .map((answer, i) => `<button>${answer}</button>`).join("")
}

function getRandomNum(max){
    return Math.floor(Math.random() * max)
}
showQuestion(getRandomNum(questions.length))
