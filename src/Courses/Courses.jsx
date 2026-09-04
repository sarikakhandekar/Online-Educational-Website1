// import React, { useState } from "react";
// import "./Courses.css";

// const courses = [
//   {
//     id: 1,
//     title: "Complete React JS Course",
//     instructor: "John Smith",
//     category: "Development",
//     level: "Beginner",
//     rating: 4.8,
//     students: 1250,
//     price: 499,
//     oldPrice: 999,
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
//   },
//   {
//     id: 2,
//     title: "UI/UX Design Masterclass",
//     instructor: "Sarah Wilson",
//     category: "Design",
//     level: "Intermediate",
//     rating: 4.7,
//     students: 890,
//     price: 399,
//     oldPrice: 799,
//     image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
//   },
//   {
//     id: 3,
//     title: "JavaScript From Zero to Hero",
//     instructor: "Mike Johnson",
//     category: "Development",
//     level: "Beginner",
//     rating: 4.9,
//     students: 2100,
//     price: 599,
//     oldPrice: 1199,
//     image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
//   },
//   {
//     id: 4,
//     title: "Digital Marketing Complete Course",
//     instructor: "Emma Brown",
//     category: "Marketing",
//     level: "Beginner",
//     rating: 4.6,
//     students: 740,
//     price: 349,
//     oldPrice: 699,
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//   },
//   {
//     id: 5,
//     title: "Python Programming Bootcamp",
//     instructor: "David Miller",
//     category: "Development",
//     level: "Intermediate",
//     rating: 4.8,
//     students: 1800,
//     price: 549,
//     oldPrice: 1099,
//     image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
//   },
//   {
//     id: 6,
//     title: "Graphic Design Essentials",
//     instructor: "Olivia Taylor",
//     category: "Design",
//     level: "Beginner",
//     rating: 4.5,
//     students: 620,
//     price: 299,
//     oldPrice: 599,
//     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
//   },
// ];

// function Courses() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const filteredCourses = courses.filter((course) => {
//     const matchesSearch = course.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesCategory =
//       category === "All" || course.category === category;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="courses-page">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           Learn<span>Hub</span>
//         </div>

//         <div className="nav-links">
//            <a href="/">Home</a> 
//           <a href="/courses" className="active">
//             Courses
//           </a>
//           <a href="/about">About</a>
//           <a href="/contact">Contact</a>
//         </div>

//         <button className="login-btn">Login</button>
//       </nav>

//       {/* Hero */}
//       <section className="hero">
//         <div className="hero-content">
//           <p className="small-title">LEARN • GROW • SUCCEED</p>

//           <h1>
//             Explore Our <span>Courses</span>
//           </h1>

//           <p className="hero-text">
//             Learn new skills from expert instructors and take your career
//             to the next level.
//           </p>

//           <div className="search-box">
//             <span>🔍</span>
//             <input
//               type="text"
//               placeholder="Search for courses..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Main */}
//       <main className="courses-container">
//         <div className="section-header">
//           <div>
//             <h2>Popular Courses</h2>
//             <p>Choose from our most popular courses</p>
//           </div>

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="All">All Categories</option>
//             <option value="Development">Development</option>
//             <option value="Design">Design</option>
//             <option value="Marketing">Marketing</option>
//           </select>
//         </div>

//         {/* Course Cards */}
//         <div className="course-grid">
//           {filteredCourses.map((course) => (
//             <div className="course-card" key={course.id}>
//               <div className="course-image">
//                 <img src={course.image} alt={course.title} />

//                 <span className="level">{course.level}</span>
//               </div>

//               <div className="course-content">
//                 <span className="category">{course.category}</span>

//                 <h3>{course.title}</h3>

//                 <p className="instructor">
//                   👨‍🏫 {course.instructor}
//                 </p>

//                 <div className="course-info">
//                   <span>⭐ {course.rating}</span>
//                   <span>👥 {course.students}</span>
//                 </div>

//                 <div className="card-bottom">
//                   <div className="price">
//                     <strong>₹{course.price}</strong>
//                     <del>₹{course.oldPrice}</del>
//                   </div>

//                   <button className="enroll-btn">
//                     Enroll
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredCourses.length === 0 && (
//           <div className="no-course">
//             <h3>No courses found 😕</h3>
//             <p>Try searching for another course.</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Courses;
import React, { useState } from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Complete React JS Course",
    instructor: "John Smith",
    category: "Development",
    level: "Beginner",
    rating: 4.8,
    students: 1250,
    price: 499,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Wilson",
    category: "Design",
    level: "Intermediate",
    rating: 4.7,
    students: 890,
    price: 399,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
  },
  {
    id: 3,
    title: "JavaScript From Zero to Hero",
    instructor: "Mike Johnson",
    category: "Development",
    level: "Beginner",
    rating: 4.9,
    students: 2100,
    price: 599,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 4,
    title: "Digital Marketing Complete Course",
    instructor: "Emma Brown",
    category: "Marketing",
    level: "Beginner",
    rating: 4.6,
    students: 740,
    price: 349,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 5,
    title: "Python Programming Bootcamp",
    instructor: "David Miller",
    category: "Development",
    level: "Intermediate",
    rating: 4.8,
    students: 1800,
    price: 549,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 6,
    title: "Graphic Design Essentials",
    instructor: "Olivia Taylor",
    category: "Design",
    level: "Beginner",
    rating: 4.5,
    students: 620,
    price: 299,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
  },
];

function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="courses-page">
      {/* Navbar */}
       <nav className="navbar">
        {/* <div className="logo">
          Learn<span>Hub</span>
        </div>  */}

        <div className="nav-links">
          <a href="/courses" className="active">
            Courses
          </a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>
        </div>

        {/* <button className="login-btn">Login</button> */}
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">LEARN • GROW • SUCCEED</p>

          <h1>
            Explore Our <span>Courses</span>
          </h1>

          <p className="hero-text">
            Learn new skills from expert instructors and take your career
            to the next level.
          </p>

          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search for courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="courses-container">
        <div className="section-header">
          <div>
            <h2>Popular Courses</h2>
            <p>Choose from our most popular courses</p>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Course Cards */}
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />

                <span className="level">{course.level}</span>
              </div>

              <div className="course-content">
                <span className="category">{course.category}</span>

                <h3>{course.title}</h3>

                <p className="instructor">
                  👨‍🏫 {course.instructor}
                </p>

                <div className="course-info">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}</span>
                </div>

                <div className="card-bottom">
                  <div className="price">
                    <strong>₹{course.price}</strong>
                    <del>₹{course.oldPrice}</del>
                  </div>

                  <button className="enroll-btn">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-course">
            <h3>No courses found 😕</h3>
            <p>Try searching for another course.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Courses;
