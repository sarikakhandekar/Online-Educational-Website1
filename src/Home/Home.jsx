// import React, { useState } from "react";
// import "./Home.css";
// import { NavLink, useNavigate } from "react-router-dom";

// const Home = () => {
//   let currentIndex = 0;

//   function scrollCards(direction) {
//     const container = document.getElementById("cards");
//     const cards = container.querySelectorAll(".card");
//     const visibleCards = 2;
//     const totalCards = cards.length;

//     const maxIndex = totalCards - visibleCards;

//     currentIndex += direction;


//     if (currentIndex > maxIndex) {
//       currentIndex = 0;
//     } else if (currentIndex < 0) {
//       currentIndex = maxIndex;
//     }

//     const card = cards[0];
//     const cardWidth = card.offsetWidth;
//     const gap = parseInt(getComputedStyle(container).gap || "20");

//     const offset = -(currentIndex * (cardWidth + gap));

//     container.style.transform = `translateX(${offset}px)`;
//   }

//   const [activeFAQ, setActiveFAQ] = useState(null);

//   const toggleFAQ = (id) => {
//     setActiveFAQ(activeFAQ === id ? null : id);
//   };

//   const navigate = useNavigate();
//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
//       />
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Start learning now</h1>
//           <p>Unlock thousands of courses and boost your career today.</p>
//           <NavLink to="/courses"><button className="btn cta">Get Started</button></NavLink>
//         </div>
//       </section>

//       <section id="Courses" className="courses-section">
//         <h2>Ready to reimagine your career?</h2>
//         <p>
//           Get the skills and real-world experience employers want with Career
//           Accelerators.
//         </p>

//         <div className="cards-wrapper">
//           <div className="cards" id="cards">
//             <div className="card">
//               <div className="div-img1"></div>
//               <div className="card-content">
//                 <h3>Full Stack Web Developer</h3>
//                 <div className="rating">
//                   ⭐ 4.7 <span>459K ratings</span> <span>87.8 hrs</span>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="div-img2"></div>
//               <div className="card-content">
//                 <h3>Digital Marketer</h3>
//                 <div className="rating">
//                   ⭐ 4.4 <span>3.6K ratings</span> <span>28.4 hrs</span>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="div-img3"></div>
//               <div className="card-content">
//                 <h3>Data Scientist</h3>
//                 <div className="rating">
//                   ⭐ 4.6 <span>221K ratings</span> <span>47.1 hrs</span>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="div-img4"></div>
//               <div className="card-content">
//                 <h3>UI/UX Designer</h3>
//                 <div className="rating">
//                   ⭐ 4.5 <span>12K ratings</span> <span>30.2 hrs</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <button className="scroll-btn left" onClick={() => scrollCards(-1)}>
//             &#10094;
//           </button>

//           <button className="scroll-btn right" onClick={() => scrollCards(1)}>
//             &#10095;
//           </button>
//         </div>

//         <NavLink to="/courses" className="btn mtop30">
//           All Career Accelerators
//         </NavLink>
//       </section>

      

//       <section className="benefits-section">
//         <h2>Why Choose Us?</h2>
//         <p>
//           We provide the right tools and guidance to help you succeed in your
//           career.
//         </p>

//         <div className="benefits">
//           <div className="benefit"
//             onClick={() => navigate("/careergrowth")}
//             style={{ cursor: "pointer" }}>
//             <i className="bi bi-graph-up"></i>
//             <h3>Career Growth</h3>
//             <p>
//               Accelerate your professional journey with industry-ready skills
//               and hands-on projects.
//             </p>
//           </div>
//           <div className="benefit"
//             onClick={() => navigate("/flexiblelearning")}
//             style={{ cursor: "pointer" }}>
//             <i className="bi bi-laptop"></i>
//             <h3>Flexible Learning</h3>
//             <p>
//               Learn anytime, anywhere, at your own pace with lifetime access to
//               all resources.
//             </p>
//           </div>
//           <div className="benefit"
//             onClick={() => navigate("/certification")}
//             style={{ cursor: "pointer" }}>
//             <i className="bi bi-award"></i>
//             <h3>Certification</h3>
//             <p>
//               Earn recognized certificates to showcase your expertise and boost
//               employability.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="faq-container">
//         <h1 className="faq-title">FAQ - Frequently Asked Questions</h1>

//         <div className={`faq-item ${activeFAQ === 1 ? "active" : ""}`}>
//           <div className="faq-question" onClick={() => toggleFAQ(1)}>
//             What is HTML?
//           </div>
//           <div className="faq-answer">
//             HTML (HyperText Markup Language) is the standard language used to
//             create and design the structure of web pages.
//           </div>
//         </div>

//         <div className={`faq-item ${activeFAQ === 2 ? "active" : ""}`}>
//           <div className="faq-question" onClick={() => toggleFAQ(2)}>
//             What is CSS?
//           </div>
//           <div className="faq-answer">
//             CSS (Cascading Style Sheets) is used to style and layout web pages,
//             including colors, fonts, and spacing.
//           </div>
//         </div>

//         <div className={`faq-item ${activeFAQ === 3 ? "active" : ""}`}>
//           <div className="faq-question" onClick={() => toggleFAQ(3)}>
//             Basic Computer Programming
//           </div>
//           <div className="faq-answer">
//             Programming Languages: Introduction to languages like Python,
//             JavaScript, or C++.
//           </div>
//         </div>

//         <div className={`faq-item ${activeFAQ === 4 ? "active" : ""}`}>
//           <div className="faq-question" onClick={() => toggleFAQ(4)}>
//             Do I need to learn coding to build a website?
//           </div>
//           <div className="faq-answer">
//             Basic knowledge of HTML, CSS, and JavaScript is essential to create
//             and manage websites effectively.
//           </div>
//         </div>

//         <div className={`faq-item ${activeFAQ === 5 ? "active" : ""}`}>
//           <div className="faq-question" onClick={() => toggleFAQ(5)}>
//             How long does it take to learn web development?
//           </div>
//           <div className="faq-answer">
//             It depends on your dedication. Basic skills can be learned in a few
//             months; mastering it can take a year or more.
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import img1 from "../assets/image/img1.avif";

const Home = () => {
  let currentIndex = 0;

  // Course cards slider
  function scrollCards(direction) {
    const container = document.getElementById("cards");

    if (!container) return;

    const cards = container.querySelectorAll(".card");

    if (cards.length === 0) return;

    const visibleCards = 2;
    const totalCards = cards.length;

    const maxIndex = Math.max(totalCards - visibleCards, 0);

    currentIndex += direction;

    if (currentIndex > maxIndex) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = maxIndex;
    }

    const card = cards[0];
    const cardWidth = card.offsetWidth;

    const gap =
      parseInt(getComputedStyle(container).gap || "20", 10);

    const offset = -(currentIndex * (cardWidth + gap));

    container.style.transform = `translateX(${offset}px)`;
  }

  // FAQ
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const navigate = useNavigate();

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />
       <section
  className="hero"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      ),
      url(${img1})
    `,backgroundRepeat:"no-repeat",backgroundPosition:"centre",backgroundSize:"cover"
  }}
>
  <div className="hero-content">

    <h1 style={{"color":"white"}}>Start learning now</h1>

    <p>
      Unlock thousands of courses and boost your career today.
    </p>

    <NavLink to="/courses">
      <button className="btn cta">
        Get Started
      </button>
    </NavLink>

  </div>
</section>

     
      <section
        id="Courses"
        className="courses-section"
      >

        <h2>
          Ready to reimagine your career?
        </h2>

        <p>
          Get the skills and real-world experience employers
          want with Career Accelerators.
        </p>

        <div className="cards-wrapper">

          <div
            className="cards"
            id="cards"
          >

            <div className="card">

              <div className="div-img1"></div>

              <div className="card-content">

                <h3>
                  Full Stack Web Developer
                </h3>

                <div className="rating">
                  ⭐ 4.7
                  <span>459K ratings</span>
                  <span>87.8 hrs</span>
                </div>

              </div>

            </div>

     
            <div className="card">

              <div className="div-img2"></div>

              <div className="card-content">

                <h3>
                  Digital Marketer
                </h3>

                <div className="rating">
                  ⭐ 4.4
                  <span>3.6K ratings</span>
                  <span>28.4 hrs</span>
                </div>

              </div>

            </div>

     
            <div className="card">

              <div className="div-img3"></div>

              <div className="card-content">

                <h3>
                  Data Scientist
                </h3>

                <div className="rating">
                  ⭐ 4.6
                  <span>221K ratings</span>
                  <span>47.1 hrs</span>
                </div>

              </div>

            </div>
            <div className="card">

              <div className="div-img4"></div>

              <div className="card-content">

                <h3>
                  UI/UX Designer
                </h3>

                <div className="rating">
                  ⭐ 4.5
                  <span>12K ratings</span>
                  <span>30.2 hrs</span>
                </div>

              </div>

            </div>

          </div>

          <button
            className="scroll-btn left"
            onClick={() => scrollCards(-1)}
          >
            &#10094;
          </button>

          <button
            className="scroll-btn right"
            onClick={() => scrollCards(1)}
          >
            &#10095;
          </button>

        </div>

        <NavLink style={{textDecoration:"none", fontSize:"17px", color:"black"}}
          to="/courses"
          className="btn mtop30"
        >
          All Career Accelerators
        </NavLink>

      </section>
      <section className="benefits-section">

        <h2>
          Why Choose Us?
        </h2>

        <p>
          We provide the right tools and guidance to help
          you succeed in your career.
        </p>

        <div className="benefits">
          <div
            className="benefit"
            onClick={() => navigate("/careergrowth")}
            style={{ cursor: "pointer" }}
          >

            <i className="bi bi-graph-up"></i>

            <h3>
              Career Growth
            </h3>

            <p>
              Accelerate your professional journey with
              industry-ready skills and hands-on projects.
            </p>

          </div>

          <div
            className="benefit"
            onClick={() => navigate("/flexiblelearning")}
            style={{ cursor: "pointer" }}
          >

            <i className="bi bi-laptop"></i>

            <h3>
              Flexible Learning
            </h3>

            <p>
              Learn anytime, anywhere, at your own pace
              with lifetime access to all resources.
            </p>

          </div>

          <div
            className="benefit"
            onClick={() => navigate("/certification")}
            style={{ cursor: "pointer" }}
          >

            <i className="bi bi-award"></i>

            <h3>
              Certification
            </h3>

            <p>
              Earn recognized certificates to showcase
              your expertise and boost employability.
            </p>

          </div>

        </div>

      </section>

      <section className="faq-container">

        <h1 className="faq-title">
          FAQ - Frequently Asked Questions
        </h1>
        <div
          className={`faq-item ${
            activeFAQ === 1 ? "active" : ""
          }`}
        >

          <div
            className="faq-question"
            onClick={() => toggleFAQ(1)}
          >
            What is HTML?
          </div>

          <div className="faq-answer">
            HTML (HyperText Markup Language) is the standard
            language used to create and design the structure
            of web pages.
          </div>

        </div>

        <div
          className={`faq-item ${
            activeFAQ === 2 ? "active" : ""
          }`}
        >

          <div
            className="faq-question"
            onClick={() => toggleFAQ(2)}
          >
            What is CSS?
          </div>

          <div className="faq-answer">
            CSS (Cascading Style Sheets) is used to style and
            layout web pages, including colors, fonts, and spacing.
          </div>

        </div>

        <div
          className={`faq-item ${
            activeFAQ === 3 ? "active" : ""
          }`}
        >

          <div
            className="faq-question"
            onClick={() => toggleFAQ(3)}
          >
            Basic Computer Programming
          </div>

          <div className="faq-answer">
            Programming Languages: Introduction to languages
            like Python, JavaScript, or C++.
          </div>

        </div>

        <div
          className={`faq-item ${
            activeFAQ === 4 ? "active" : ""
          }`}
        >

          <div
            className="faq-question"
            onClick={() => toggleFAQ(4)}
          >
            Do I need to learn coding to build a website?
          </div>

          <div className="faq-answer">
            Basic knowledge of HTML, CSS, and JavaScript is
            essential to create and manage websites effectively.
          </div>

        </div>

        <div
          className={`faq-item ${
            activeFAQ === 5 ? "active" : ""
          }`}
        >

          <div
            className="faq-question"
            onClick={() => toggleFAQ(5)}
          >
            How long does it take to learn web development?
          </div>

          <div className="faq-answer">
            It depends on your dedication. Basic skills can be
            learned in a few months; mastering it can take a
            year or more.
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
