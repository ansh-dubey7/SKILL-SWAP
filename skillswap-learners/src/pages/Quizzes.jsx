import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../config';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/quizzes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuizzes(res.data);
      } catch (error) {
        toast.error("Failed to load quizzes.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setAnswers(Array(quiz.questions.length).fill(null));
    setScore(null);
  };

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const submitQuiz = async () => {
    if (answers.includes(null)) {
      toast.error("Please answer all questions.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_URL}/api/quizzes/${selectedQuiz._id}/submit`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setScore(res.data.score);
      toast.success(`Quiz submitted! Your score: ${res.data.score}/${res.data.total}`);
    } catch (error) {
      toast.error("Failed to submit quiz.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">Quizzes & Tests</h1>
        {!selectedQuiz ? (
          <>
            {loading ? (
              <p className="text-center text-gray-400">Loading quizzes...</p>
            ) : quizzes.length === 0 ? (
              <p className="text-center text-gray-400">No quizzes available.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz._id}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h2 className="text-2xl font-semibold text-white">{quiz.title}</h2>
                    <p className="text-gray-400 mt-2">{quiz.description}</p>
                    <p className="text-sm text-blue-300 mt-2">Category: {quiz.category}</p>
                    <button
                      onClick={() => startQuiz(quiz)}
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      Start Quiz
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white mb-6">{selectedQuiz.title}</h2>
            {score === null ? (
              <>
                {selectedQuiz.questions.map((q, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="text-lg font-medium text-white mb-2">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-center space-x-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                        >
                          <input
                            type="radio"
                            name={`question-${idx}`}
                            checked={answers[idx] === optIdx}
                            onChange={() => handleAnswerChange(idx, optIdx)}
                            className="form-radio text-blue-500"
                          />
                          <span className="text-gray-200">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={submitQuiz}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
                >
                  Submit Quiz
                </button>
                <button
                  onClick={() => setSelectedQuiz(null)}
                  className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 mt-4"
                >
                  Back to Quizzes
                </button>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Your Score</h3>
                <p className="text-4xl font-semibold text-white">
                  {score} / {selectedQuiz.questions.length}
                </p>
                <button
                  onClick={() => setSelectedQuiz(null)}
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Back to Quizzes
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quizzes;







// // src/pages/Quizzes.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Quizzes = () => {
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedQuiz, setSelectedQuiz] = useState(null);
//   const [answers, setAnswers] = useState([]); // Array for 10 answers
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/quizzes", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setQuizzes(res.data);
//       } catch (error) {
//         toast.error("Failed to load quizzes.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   const startQuiz = (quiz) => {
//     setSelectedQuiz(quiz);
//     setAnswers(Array(quiz.questions.length).fill(null)); // Initialize answers array
//     setScore(null);
//   };

//   const handleAnswerChange = (questionIndex, answerIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = answerIndex;
//     setAnswers(newAnswers);
//   };

//   const submitQuiz = async () => {
//     if (answers.includes(null)) {
//       toast.error("Please answer all questions.");
//       return;
//     }
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         `http://localhost:5000/api/quizzes/${selectedQuiz._id}/submit`,
//         { answers },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setScore(res.data.score);
//       toast.success(`Quiz submitted! Your score: ${res.data.score}/${res.data.total}`);
//     } catch (error) {
//       toast.error("Failed to submit quiz.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">Quizzes & Tests</h1>

//         {!selectedQuiz ? (
//           <>
//             {loading ? (
//               <p className="text-center text-gray-400">Loading quizzes...</p>
//             ) : quizzes.length === 0 ? (
//               <p className="text-center text-gray-400">No quizzes available.</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {quizzes.map((quiz) => (
//                   <div
//                     key={quiz._id}
//                     className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                   >
//                     <h2 className="text-2xl font-semibold text-white">{quiz.title}</h2>
//                     <p className="text-gray-400 mt-2">{quiz.description}</p>
//                     <p className="text-sm text-blue-300 mt-2">Category: {quiz.category}</p>
//                     <button
//                       onClick={() => startQuiz(quiz)}
//                       className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//                     >
//                       Start Quiz
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
//             <h2 className="text-3xl font-semibold text-white mb-6">{selectedQuiz.title}</h2>
//             {score === null ? (
//               <>
//                 {selectedQuiz.questions.map((q, idx) => (
//                   <div key={idx} className="mb-6">
//                     <p className="text-lg font-medium text-white mb-2">
//                       {idx + 1}. {q.question}
//                     </p>
//                     <div className="space-y-2">
//                       {q.options.map((option, optIdx) => (
//                         <label
//                           key={optIdx}
//                           className="flex items-center space-x-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
//                         >
//                           <input
//                             type="radio"
//                             name={`question-${idx}`}
//                             checked={answers[idx] === optIdx}
//                             onChange={() => handleAnswerChange(idx, optIdx)}
//                             className="form-radio text-blue-500"
//                           />
//                           <span className="text-gray-200">{option}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//                 <button
//                   onClick={submitQuiz}
//                   className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
//                 >
//                   Submit Quiz
//                 </button>
//                 <button
//                   onClick={() => setSelectedQuiz(null)}
//                   className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 mt-4"
//                 >
//                   Back to Quizzes
//                 </button>
//               </>
//             ) : (
//               <div className="text-center">
//                 <h3 className="text-2xl font-bold text-green-400 mb-4">Your Score</h3>
//                 <p className="text-4xl font-semibold text-white">
//                   {score} / {selectedQuiz.questions.length}
//                 </p>
//                 <button
//                   onClick={() => setSelectedQuiz(null)}
//                   className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   Back to Quizzes
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Quizzes;