function submitQuiz() {
    const answers = {
      q1: "A", // Correct answers for the quiz
      q2: "B",
      q3: "B",
      q4: "C",
      q5: "D"
    };
  
    let score = 0;
  
    for (let i = 1; i <= 5; i++) {
      const question = document.querySelector(`input[name="q${i}"]:checked`);
      if (question && question.value === answers[`q${i}`]) {
        score++;
      }
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of 5!`;
  
    if (score === 5) {
      resultDiv.innerHTML += "<br>Perfect score! Well done! ";
    } else if (score >= 3) {
      resultDiv.innerHTML += "<br>Good job! Keep it up!";
    } else {
      resultDiv.innerHTML += "<br>Better luck next time!";
    }
  }
  