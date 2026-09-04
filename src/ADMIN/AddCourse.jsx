


// import { useState } from "react";

// const AddCourse = () => {
//   const [course, setCourse] = useState({
//     name: "",
//     subtitle: "",
//     headline: "",
//     price: "",
//     image: "",
//     rating: "",
//     duration: "",
//     students: "",
//     level: "",
//     category: "",
//     whatYouWillLearn: "",
//     description: "",
//     curriculum: "",
//     requirements: "",
//     targetAudience: "",
//     instructorInfo: "",
//     reviews: "",
//     demoVideo: ""
//   });

//   const handleChange = (e) => {
//     setCourse({ ...course, [e.target.name]: e.target.value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/admin/add-course", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(course)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ Course added successfully");

//         setCourse({
//           name: "",
//           subtitle: "",
//           headline: "",
//           price: "",
//           image: "",
//           rating: "",
//           duration: "",
//           students: "",
//           level: "",
//           category: "",
//           whatYouWillLearn: "",
//           description: "",
//           curriculum: "",
//           requirements: "",
//           targetAudience: "",
//           instructorInfo: "",
//           reviews: "",
//           demoVideo: ""
//         });
//       } else {
//         alert(data.message || "❌ Failed to add course");
//       }

//     } catch (err) {
//       alert("❌ Server error");
//     }
//   };

//   return (
//     <div className="admin-card">
//       <h1>Add New Course</h1>

//       <form onSubmit={submit} className="admin-form-grid">

//         <div className="admin-field">
//           <label>Course Name</label>
//           <input name="name" value={course.name} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Subtitle</label>
//           <input name="subtitle" value={course.subtitle} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Headline</label>
//           <textarea name="headline" value={course.headline} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Image URL</label>
//           <input name="image" value={course.image} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Price (₹)</label>
//           <input name="price" value={course.price} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Rating</label>
//           <input name="rating" value={course.rating} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Duration</label>
//           <input name="duration" value={course.duration} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Students</label>
//           <input name="students" value={course.students} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Level</label>
//           <input name="level" value={course.level} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Category</label>
//           <input name="category" value={course.category} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>What You Will Learn ( | separated )</label>
//           <textarea name="whatYouWillLearn" value={course.whatYouWillLearn} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Description</label>
//           <textarea name="description" value={course.description} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Curriculum</label>
//           <textarea name="curriculum" value={course.curriculum} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Requirements</label>
//           <textarea name="requirements" value={course.requirements} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Target Audience</label>
//           <textarea name="targetAudience" value={course.targetAudience} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Instructor Info</label>
//           <textarea name="instructorInfo" value={course.instructorInfo} onChange={handleChange} />
//         </div>

//         <div className="admin-field full">
//           <label>Reviews</label>
//           <textarea name="reviews" value={course.reviews} onChange={handleChange} />
//         </div>

//         <div className="admin-field">
//           <label>Demo Video (YouTube Embed)</label>
//           <input
//             name="demoVideo"
//             value={course.demoVideo}
//             onChange={handleChange}
//             placeholder="https://www.youtube.com/embed/VIDEO_ID"
//           />
//         </div>

//         <button className="admin-btn admin-btn-blue full">
//           Add Course
//         </button>

//       </form>
//     </div>
//   );
// };

// export default AddCourse;

import { useState } from "react";

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    subtitle: "",
    headline: "",
    price: "",
    image: "",
    rating: "",
    duration: "",
    students: "",
    level: "",
    category: "",
    whatYouWillLearn: "",
    description: "",
    curriculum: "",
    requirements: "",
    targetAudience: "",
    instructorInfo: "",
    reviews: "",
    demoVideo: ""
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    console.log("Course data:", course);

    alert("Course form submitted");
  };

  return (
    <div className="admin-card">
      <h1>Add New Course</h1>

      <form onSubmit={submit} className="admin-form-grid">

        <div className="admin-field">
          <label>Course Name</label>
          <input
            name="name"
            value={course.name}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Subtitle</label>
          <input
            name="subtitle"
            value={course.subtitle}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Headline</label>
          <textarea
            name="headline"
            value={course.headline}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Image URL</label>
          <input
            name="image"
            value={course.image}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Price (₹)</label>
          <input
            name="price"
            value={course.price}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Rating</label>
          <input
            name="rating"
            value={course.rating}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Duration</label>
          <input
            name="duration"
            value={course.duration}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Students</label>
          <input
            name="students"
            value={course.students}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Level</label>
          <input
            name="level"
            value={course.level}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Category</label>
          <input
            name="category"
            value={course.category}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>What You Will Learn ( | separated )</label>
          <textarea
            name="whatYouWillLearn"
            value={course.whatYouWillLearn}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Curriculum</label>
          <textarea
            name="curriculum"
            value={course.curriculum}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Requirements</label>
          <textarea
            name="requirements"
            value={course.requirements}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Target Audience</label>
          <textarea
            name="targetAudience"
            value={course.targetAudience}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Instructor Info</label>
          <textarea
            name="instructorInfo"
            value={course.instructorInfo}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Reviews</label>
          <textarea
            name="reviews"
            value={course.reviews}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Demo Video (YouTube Embed)</label>
          <input
            name="demoVideo"
            value={course.demoVideo}
            onChange={handleChange}
            placeholder="https://www.youtube.com/embed/VIDEO_ID"
          />
        </div>

        <button className="admin-btn admin-btn-blue full">
          Add Course
        </button>

      </form>
    </div>
  );
};

export default AddCourse;