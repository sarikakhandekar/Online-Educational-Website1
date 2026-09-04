import React from 'react';
import './CareerGrowth.css';
import { useNavigate } from 'react-router-dom';

const CareerGrowth = () => {
  const growthPoints = [
    { icon: '📚', text: 'Continuous Learning & Skill Development' },
    { icon: '💼', text: 'Hands-on Experience & Real Projects' },
    { icon: '🎯', text: 'Goal Setting & Achievement' },
    { icon: '🚀', text: 'Personal & Professional Growth' },
  ];

  const navigate = useNavigate  ();
  return (
    <section className="career-section">
      <div className="career-container">
        <h1 className="career-headline">
          Unlock Your Career Potential
        </h1>

        <p className="career-description">
          Career growth is a journey of continuous improvement and learning.
          Investing in your professional development opens doors to new opportunities,
          helps you stay relevant in a changing world, and leads to a more fulfilling career.
        </p>

        <div className="growth-points">
          <h2 className="points-title">Keys to Success</h2>
          <ul className="points-list">
            {growthPoints.map((point, index) => (
              <li key={index} className="point-item">
                <span className="point-icon">{point.icon}</span>
                <span className="point-text">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => navigate("/courses")}
          style={{ cursor: "pointer" }}
           className="cta-button">
          Start Your Growth
        </button>
      </div>
    </section>
  );
};

export default CareerGrowth;
