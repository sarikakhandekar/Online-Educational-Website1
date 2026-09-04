// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import "./CourseDetail.css";

// // const CourseDetail = () => {
// //   const { id } = useParams();
// //   const [course, setCourse] = useState(null);

// //   useEffect(() => {
// //     fetch(`http://localhost:5000/api/courses/${id}`)
// //       .then(res => res.json())
// //       .then(data => setCourse(data));
// //   }, [id]);


// //   if (!course) return <h2>Course not found</h2>;

// //   const bullets = course.what_you_will_learn.split("|");
// //   const curriculum = course.curriculum.split("|");

// //   return (
// //     <div className="udemy-detail-container">

// //       {/* HEADER */}
// //       <div className="udemy-header">
// //         <h1>{course.name}</h1>
// //         <p className="subtitle">{course.subtitle}</p>

// //         <div className="meta">
// //           <span>⭐ {course.rating}</span>
// //           <span>• {course.students} students</span>
// //           <span>• {course.level}</span>
// //         </div>
// //       </div>

// //       {/* MAIN GRID */}
// //       <div className="udemy-main-grid">

// //         {/* LEFT — DETAILS */}
// //         <div className="udemy-left">

// //           {/* HEADLINE */}
// //           <p className="headline">{course.headline}</p>

// //           {/* WHAT YOU WILL LEARN */}
// //           <h3>What you'll learn</h3>
// //           <ul className="bullets">
// //             {bullets.map((b, i) => <li key={i}>{b.trim()}</li>)}
// //           </ul>

// //           {/* DESCRIPTION */}
// //           <h3>About this course</h3>
// //           <p>{course.description}</p>

// //           {/* CURRICULUM */}
// //           <h3>Curriculum</h3>
// //           <ul className="curriculum">
// //             {curriculum.map((c, i) => <li key={i}>{c.trim()}</li>)}
// //           </ul>

// //           {/* REQUIREMENTS */}
// //           <h3>Requirements</h3>
// //           <p>{course.requirements}</p>

// //           {/* TARGET AUDIENCE */}
// //           <h3>Who this course is for</h3>
// //           <p>{course.targetAudience}</p>

// //           {/* INSTRUCTOR */}
// //           <h3>Instructor</h3>
// //           <p>{course.instructorInfo}</p>

// //           {/* REVIEWS */}
// //           <h3>Reviews</h3>
// //           <p>{course.reviews}</p>

// //         </div>

// //         {/* RIGHT — IMAGE & BUY */}
// //         <div className="udemy-right">
// //           {course.demo_video ? (
// //             <div className="video-box">
// //               <iframe
// //                 src={course.demoVideo}
// //                 title="Course Preview"
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //               ></iframe>
// //             </div>
// //           ) : (
// //             <img
// //               src={course.image}
// //               alt={course.name}
// //               className="course-img"
// //             />
// //           )}


// //           <div className="buy-box">
// //             <p className="price">₹{course.price}</p>
// //             <button className="buy-btn">Buy Now</button>
// //             <p className="money-back">30-Day Money-Back Guarantee</p>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseDetail;
// // remove backend code only

// import { useParams } from "react-router-dom";
// import "./CourseDetail.css";

// const CourseDetail = () => {
//   const { id } = useParams();

//   const courses = [
//     {
//       id: "1",
//       name: "Web Development",
//       subtitle: "Learn modern web development from scratch",
//       rating: "4.8",
//       students: "1200",
//       level: "Beginner",
//       headline: "Build real-world websites and web applications.",
//       what_you_will_learn:
//         "HTML & CSS|JavaScript|React.js|Responsive Web Design|Real-world Projects",
//       description:
//         "This course teaches you the fundamentals of web development and helps you build modern websites and applications.",
//       curriculum:
//         "HTML Basics|CSS & Responsive Design|JavaScript Fundamentals|React.js|Final Project",
//       requirements: "Basic computer knowledge and an interest in learning.",
//       targetAudience:
//         "Students, beginners, and anyone interested in web development.",
//       instructorInfo:
//         "Experienced web development instructor with industry experience.",
//       reviews: "Excellent course with practical projects and easy explanations.",
//       demo_video: "",
//       demoVideo: "",
//       image: "https://via.placeholder.com/800x450",
//       price: "999"
//     }
//   ];

//   const course = courses.find((course) => course.id === id);

//   if (!course) return <h2>Course not found</h2>;

//   const bullets = course.what_you_will_learn.split("|");
//   const curriculum = course.curriculum.split("|");

//   return (
//     <div className="udemy-detail-container">

//       <div className="udemy-header">
//         <h1>{course.name}</h1>
//         <p className="subtitle">{course.subtitle}</p>

//         <div className="meta">
//           <span>⭐ {course.rating}</span>
//           <span>• {course.students} students</span>
//           <span>• {course.level}</span>
//         </div>
//       </div>

//       <div className="udemy-main-grid">
//         <div className="udemy-left">        
//           <p className="headline">{course.headline}</p>

//           <h3>What you'll learn</h3>
//           <ul className="bullets">
//             {bullets.map((b, i) => (
//               <li key={i}>{b.trim()}</li>
//             ))}
//           </ul>

//           <h3>About this course</h3>
//           <p>{course.description}</p>

//           <h3>Curriculum</h3>
//           <ul className="curriculum">
//             {curriculum.map((c, i) => (
//               <li key={i}>{c.trim()}</li>
//             ))}
//           </ul>

//           <h3>Requirements</h3>
//           <p>{course.requirements}</p>

//           <h3>Who this course is for</h3>
//           <p>{course.targetAudience}</p>

//           <h3>Instructor</h3>
//           <p>{course.instructorInfo}</p>

//           <h3>Reviews</h3>
//           <p>{course.reviews}</p>

//         </div>

//         <div className="udemy-right">
//           {course.demo_video ? (
//             <div className="video-box">
//               <iframe
//                 src={course.demoVideo}
//                 title="Course Preview"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           ) : (
//             <img
//               src={course.image}
//               alt={course.name}
//               className="course-img"
//             />
//           )}

//           <div className="buy-box">
//             <p className="price">₹{course.price}</p>

//             <button className="buy-btn">
//               Buy Now
//             </button>

//             <p className="money-back">
//               30-Day Money-Back Guarantee
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CourseDetail;

import { useParams } from "react-router-dom";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();

  // Course data
  const courses = [
    {
      id: "1",
      name: "Web Development",
      subtitle: "Learn modern web development from scratch",
      rating: "4.8",
      students: "1200",
      level: "Beginner",

      headline: "Build real-world websites and web applications.",

      what_you_will_learn:
        "HTML & CSS|JavaScript|React.js|Responsive Web Design|Real-world Projects",

      description:
        "This course teaches you the fundamentals of web development and helps you build modern websites and applications.",

      curriculum:
        "HTML Basics|CSS & Responsive Design|JavaScript Fundamentals|React.js|Final Project",

      requirements:
        "Basic computer knowledge and an interest in learning.",

      targetAudience:
        "Students, beginners, and anyone interested in web development.",

      instructorInfo:
        "Experienced web development instructor with industry experience.",

      reviews:
        "Excellent course with practical projects and easy explanations.",

      // YouTube Embed URL
      demo_video: "https://www.youtube.com/embed/ysz5S6PUM-U",

      image: "https://via.placeholder.com/800x450",

      price: "999",
    },
  ];

  // URL se course find
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const bullets = course.what_you_will_learn.split("|");
  const curriculum = course.curriculum.split("|");

  return (
    <div className="udemy-detail-container">

      {/* HEADER */}
      <div className="udemy-header">
        <h1>{course.name}</h1>

        <p className="subtitle">
          {course.subtitle}
        </p>

        <div className="meta">
          <span>⭐ {course.rating}</span>
          <span>• {course.students} students</span>
          <span>• {course.level}</span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="udemy-main-grid">

        {/* LEFT */}
        <div className="udemy-left">

          <p className="headline">
            {course.headline}
          </p>

          {/* WHAT YOU WILL LEARN */}
          <h3>What you'll learn</h3>

          <ul className="bullets">
            {bullets.map((b, i) => (
              <li key={i}>
                {b.trim()}
              </li>
            ))}
          </ul>

          {/* DESCRIPTION */}
          <h3>About this course</h3>

          <p>{course.description}</p>

          {/* CURRICULUM */}
          <h3>Curriculum</h3>

          <ul className="curriculum">
            {curriculum.map((c, i) => (
              <li key={i}>
                {c.trim()}
              </li>
            ))}
          </ul>

          {/* REQUIREMENTS */}
          <h3>Requirements</h3>

          <p>{course.requirements}</p>

          {/* TARGET AUDIENCE */}
          <h3>Who this course is for</h3>

          <p>{course.targetAudience}</p>

          {/* INSTRUCTOR */}
          <h3>Instructor</h3>

          <p>{course.instructorInfo}</p>

          {/* REVIEWS */}
          <h3>Reviews</h3>

          <p>{course.reviews}</p>

        </div>

        {/* RIGHT */}
        <div className="udemy-right">

          {/* VIDEO */}
          {course.demo_video ? (
            <div className="video-box">

              <iframe
                src={course.demo_video}
                title="Course Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>
          ) : (
            <img
              src={course.image}
              alt={course.name}
              className="course-img"
            />
          )}

          {/* BUY BOX */}
          <div className="buy-box">

            <p className="price">
              ₹{course.price}
            </p>

            <button className="buy-btn">
              Buy Now
            </button>

            <p className="money-back">
              30-Day Money-Back Guarantee
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetail;
