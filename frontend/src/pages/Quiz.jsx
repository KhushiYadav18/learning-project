import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "../components/NavBar";
import useClickLogger from "../components/ClickLogger";

export default function Quiz() {
  useClickLogger("Quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const questions = [
    {
      id: 1,
      question: "What is React?",
      options: ["A JavaScript library for building user interfaces", "A programming language", "A database management system", "An operating system"],
      correct: 0,
      explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications."
    },
    {
      id: 2,
      question: "Which hook is used to manage state in functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 0,
      explanation: "useState is the primary hook used to add state to functional components in React."
    },
    {
      id: 3,
      question: "What is the purpose of useEffect hook?",
      options: ["To manage component state", "To handle side effects", "To create refs", "To optimize performance"],
      correct: 1,
      explanation: "useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
    },
    {
      id: 4,
      question: "What is JSX?",
      options: ["A JavaScript extension", "A new programming language", "A database query language", "A CSS framework"],
      correct: 0,
      explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
    },
    {
      id: 5,
      question: "How do you pass data from parent to child component?",
      options: ["Using state", "Using props", "Using context", "Using refs"],
      correct: 1,
      explanation: "Props (properties) are used to pass data from parent components to child components in React."
    }
  ];

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "from-green-500 to-green-600";
    if (score >= 60) return "from-yellow-500 to-yellow-600";
    return "from-red-500 to-red-600";
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return "Outstanding! You're a React master! 🎉";
    if (score >= 60) return "Great work! Keep expanding your knowledge! 📚";
    return "Keep practicing! Every challenge makes you stronger! 💪";
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-dark-primary">
        <NavBar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-dark p-8">
              <h1 className="text-3xl font-bold text-gray-100 mb-6">Assessment Results 🎯</h1>
              
              <div className={`w-32 h-32 bg-gradient-to-r ${getScoreColor(score)} rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6`}>
                {score}%
              </div>
              
              <h2 className="text-xl font-semibold text-gray-100 mb-4">{getScoreMessage(score)}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/30">
                  <div className="text-2xl font-bold text-indigo-300">{questions.length}</div>
                  <div className="text-sm text-indigo-300">Total Questions</div>
                </div>
                <div className="bg-green-900/30 p-4 rounded-xl border border-green-500/30">
                  <div className="text-2xl font-bold text-green-300">{questions.filter(q => selectedAnswers[q.id] === q.correct).length}</div>
                  <div className="text-sm text-green-300">Correct Answers</div>
                </div>
                <div className="bg-red-900/30 p-4 rounded-xl border border-red-500/30">
                  <div className="text-2xl font-bold text-red-300">{questions.filter(q => selectedAnswers[q.id] !== q.correct).length}</div>
                  <div className="text-sm text-red-300">Incorrect Answers</div>
                </div>
              </div>

              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div key={q.id} className="text-left p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <h3 className="font-semibold text-gray-100 mb-2">
                      {index + 1}. {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg ${
                            optIndex === q.correct
                              ? "bg-green-900/50 border border-green-500/50"
                              : optIndex === selectedAnswers[q.id] && optIndex !== q.correct
                              ? "bg-red-900/50 border border-red-500/50"
                              : "bg-gray-800/50 border border-gray-700/50"
                          }`}
                        >
                          <span className={`font-medium ${
                            optIndex === q.correct
                              ? "text-green-300"
                              : optIndex === selectedAnswers[q.id] && optIndex !== q.correct
                              ? "text-red-300"
                              : "text-gray-300"
                          }`}>
                            {optIndex === q.correct ? "✅ " : optIndex === selectedAnswers[q.id] && optIndex !== q.correct ? "❌ " : ""}
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-3 italic">{q.explanation}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setSelectedAnswers({});
                  }}
                  className="btn-primary-dark px-6 py-3"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="btn-secondary-dark px-6 py-3"
                >
                  Back to Learning Paths
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quiz Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
            React Fundamentals Assessment 🧠
          </h1>
          <p className="text-lg text-gray-300">
            Challenge your knowledge with these interactive questions
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-400">
                ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="progress-bar-dark">
              <div 
                className="progress-fill-dark"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          className="card-dark p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-100 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(questions[currentQuestion].id, index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  selectedAnswers[questions[currentQuestion].id] === index
                    ? "border-indigo-500 bg-indigo-900/30 text-indigo-300"
                    : "border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/50 text-gray-300"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">{option}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              currentQuestion === 0
                ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                : "btn-secondary-dark"
            }`}
          >
            ← Previous
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:shadow-green-500/25"
            >
              Submit Assessment ✅
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn-primary-dark px-6 py-3"
            >
              Next →
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
