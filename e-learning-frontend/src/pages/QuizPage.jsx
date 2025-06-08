import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const QuizPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/enrollments/quiz/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Fetched quiz questions:', res.data); // Debug
        setQuestions(res.data);
        setAnswers(new Array(res.data.length).fill(null));
      } catch (err) {
        console.error('Error fetching quiz:', err.response?.data || err);
        setError(err.response?.data?.message || 'Failed to load quiz. Please try again later.');
      }
    };

    fetchQuiz();
  }, [courseId, token]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/enrollments/quiz/${courseId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Quiz submission response:', res.data); // Debug
      setResult(res.data);
      if (res.data.completed) {
        alert('Congratulations! You have completed the course!');
        navigate('/my-courses');
      } else {
        alert(`You scored ${res.data.score}/${res.data.total}. Try again to complete the course.`);
      }
    } catch (err) {
      console.error('Error submitting quiz:', err.response?.data || err);
      setError(err.response?.data?.message || 'Failed to submit quiz. Please try again.');
    }
  };

  if (error) {
    return (
      <div className="quiz-error">
        <p>{error}</p>
        <button onClick={() => navigate(`/courses/${courseId}`)}>Back to Course</button>
      </div>
    );
  }

  if (!questions.length && !error) {
    return <p>Loading quiz...</p>;
  }

  if (result) {
    return (
      <div className="quiz-result">
        <h3>Quiz Result</h3>
        <p>Score: {result.score}/{result.total}</p>
        <p>Percentage: {result.percentage}%</p>
        <p>{result.message}</p>
        {!result.completed && (
          <button onClick={() => window.location.reload()}>Try Again</button>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <h2>Quiz for Course</h2>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <h4>{qIndex + 1}. {question.question}</h4>
          {question.options.map((option, oIndex) => (
            <div key={oIndex} className="quiz-option">
              <input
                type="radio"
                name={`question-${qIndex}`}
                value={oIndex}
                checked={answers[qIndex] === oIndex}
                onChange={() => handleAnswerChange(qIndex, oIndex)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={answers.includes(null)}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;