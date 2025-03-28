// netlify/functions/script.js

exports.handler = async function(event, context) {
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

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return {
    statusCode: 200,
    body: JSON.stringify({ question: randomQuestion })
  };
};
