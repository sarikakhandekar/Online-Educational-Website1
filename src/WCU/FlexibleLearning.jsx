import React from 'react';
import './FlexibleLearning.css';
import { useNavigate } from 'react-router-dom';

const FlexibleLearning = () => {
  const learningPoints = [
    { icon: '🕐', text: 'Learn at Your Own Pace & Schedule' },
    { icon: '🌍', text: 'Access Content From Anywhere' },
    { icon: '🎓', text: 'Personalized Learning Paths' },
    { icon: '📱', text: 'Multi-Device Compatibility' },
  ];

  const navigate = useNavigate();

  return (
    <section className="learning-section">
      <div className="learning-container">
        <span className="learning-badge">Flexible Education</span>

        <h1 className="learning-headline">
          Learn On Your Terms
        </h1>

        <p className="learning-description">
          Flexible learning empowers you to take control of your education journey.
          Whether you're balancing work, family, or other commitments, our adaptive
          approach ensures you never have to compromise on your growth and development.
        </p>

        <div className="learning-points">
          <h2 className="points-title">Why Choose Flexible Learning?</h2>
          <ul className="points-list">
            {learningPoints.map((point, index) => (
              <li key={index} className="point-item">
                <span className="point-icon">{point.icon}</span>
                <span className="point-text">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cta-wrapper">
          <button
            onClick={() => navigate("/courses")}
            style={{ cursor: "pointer" }} className="cta-button-primary">
            Explore Courses
          </button>

        </div>
      </div>
    </section>
  );
};

export default FlexibleLearning;
