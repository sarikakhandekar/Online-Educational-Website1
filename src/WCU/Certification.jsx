import React from 'react';
import './Certification.css';

const Certification = () => {
    const certificationPoints = [
        { icon: '✓', text: 'Industry-Recognized Credentials' },
        { icon: '✓', text: 'Validate Your Skills & Expertise' },
        { icon: '✓', text: 'Boost Career Opportunities' },
        { icon: '✓', text: 'Stand Out From The Competition' },
    ];

    return (
        <section className="certification-section">
            <div className="certification-container">
                <div className="cert-icon-wrapper">
                    <span className="cert-icon">🏆</span>
                </div>

                <span className="certification-badge">Get Certified</span>

                <h1 className="certification-headline">
                    Prove Your Expertise
                </h1>

                <p className="certification-description">
                    Professional certifications are powerful tools for career advancement.
                    They demonstrate your commitment to excellence, validate your knowledge,
                    and open doors to new opportunities in today's competitive job market.
                </p>

                <div className="certification-points">
                    <h2 className="points-title">Benefits of Certification</h2>
                    <ul className="points-list">
                        {certificationPoints.map((point, index) => (
                            <li key={index} className="point-item">
                                <span className="point-check">{point.icon}</span>
                                <span className="point-text">{point.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>



                <p className="trust-text">
                    Trusted by 50,000+ professionals worldwide
                </p>
            </div>
        </section>
    );
};

export default Certification;