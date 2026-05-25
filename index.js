const questions = [
    {questions: "Hlavni mesto Ceska ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 0
    },
    {questions: "Hlavni mesto Slovenska ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 2
    },
    {questions: "Hlavni mesto Polska ?",
        answer: ["Praha", "Varšava", "Bratislava"],
        correct: 1
    },
    {questions: "Hlavni mesto Nemecka ?",
        answer: ["Praha", "Berlin", "Bratislava"],
        correct: 1
    },
    {questions: "Hlavni mesto Rakouska ?",
        answer: ["Viden", "Berlin", "Bratislava"],
        correct: 0
    }
]

function showQuestion(index) {
  const q = questions[index]

  document.getElementById("question").innerHTML = q.questions
  document.getElementById("answers").innerHTML = q.answer
    .map((answer, i) => `<button type="button" id="btn"  onclick="getAnotherQuestion(${index}); CorrectOrNot(${q.correct},${i}, ${index})">${answer}</button>`).join("")
}

function getRandomNum(max){
    return Math.floor(Math.random() * max)
}
showQuestion(getRandomNum(questions.length))



let scorenum = 0
function CorrectOrNot(answer, i, index){
    score = document.getElementById("score")
    
    if (answer === i){
        scorenum++
    }
    if (index >= questions.length - 1){
          document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true
        })  
    }

    
    score.innerHTML = `Score: ${scorenum}`
}

function getAnotherQuestion(index){
    const next = index + 1
    if (next <= questions.length - 1){
        showQuestion(next)
    }else{
        console.log("no more questions")
    }

}

