// Array of questions
const questions = [
    "What is your favorite hobby?",
    "If you could visit any country, where would you go?",
    "What book has influenced you the most?",
    "What is the most memorable moment of your life?",
    "What is your biggest fear?",
    "If you could meet any historical figure, who would it be?",
    "What is your dream job?",
    "What is one thing you're really good at?",
    "What was the best vacation you ever had?",
    "If you could have dinner with any celebrity, who would it be?"
  ];
  
  // Function to generate a random question
  function generateQuestion() {
    // Get a random question from the array
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    // Display the random question in the question box
    document.getElementById('question-box').innerHTML = `<p>${randomQuestion}</p>`;
  }
  