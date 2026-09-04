import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const mode = new URLSearchParams(useLocation().search).get("mode");
  const isView = mode === "view";

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then(data =>
        setCourse({
          ...data,
          whatYouWillLearn: data.what_you_will_learn,
          targetAudience: data.target_audience,
          instructorInfo: data.instructor_info,
          demoVideo: data.demo_video
        })
      );
  }, [id]);

  if (!course) {
    return <h2 className="admin-card">Course not found</h2>;
  }

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/admin/course/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course)
    });

    alert("Course updated successfully");
    navigate("/admin/course");
  };

  return (
    <div className="admin-card">
      <h1>{isView ? "View Course" : "Edit Course"}</h1>

      <form onSubmit={submit} className="admin-form-grid">

        {/* BASIC INFO */}
        <div className="admin-field">
          <label>Course Name</label>
          <input
            className="admin-input"
            name="name"
            value={course.name}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Subtitle</label>
          <input
            className="admin-input"
            name="subtitle"
            value={course.subtitle}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Headline</label>
          <textarea
            className="admin-input"
            name="headline"
            value={course.headline}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        {/* MEDIA & STATS */}
        <div className="admin-field">
          <label>Image URL</label>
          <input
            className="admin-input"
            name="image"
            value={course.image}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Price</label>
          <input
            className="admin-input"
            name="price"
            value={course.price}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Rating</label>
          <input
            className="admin-input"
            name="rating"
            value={course.rating}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Duration</label>
          <input
            className="admin-input"
            name="duration"
            value={course.duration}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Students Enrolled</label>
          <input
            className="admin-input"
            name="students"
            value={course.students}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Level</label>
          <input
            className="admin-input"
            name="level"
            value={course.level}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Category</label>
          <input
            className="admin-input"
            name="category"
            value={course.category}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        {/* CONTENT */}
        <div className="admin-field full">
          <label>What You Will Learn (| separated)</label>
          <textarea
            className="admin-input"
            name="whatYouWillLearn"
            value={course.whatYouWillLearn}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Description</label>
          <textarea
            className="admin-input"
            name="description"
            value={course.description}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Curriculum (| separated)</label>
          <textarea
            className="admin-input"
            name="curriculum"
            value={course.curriculum}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Requirements</label>
          <textarea
            className="admin-input"
            name="requirements"
            value={course.requirements}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Target Audience</label>
          <textarea
            className="admin-input"
            name="targetAudience"
            value={course.targetAudience}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Instructor Info</label>
          <textarea
            className="admin-input"
            name="instructorInfo"
            value={course.instructorInfo}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field full">
          <label>Reviews</label>
          <textarea
            className="admin-input"
            name="reviews"
            value={course.reviews}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        <div className="admin-field">
          <label>Demo Video URL</label>
          <input
            className="admin-input"
            name="demoVideo"
            value={course.demoVideo || ""}
            disabled={isView}
            onChange={handleChange}
          />
        </div>

        {!isView && (
          <div className="admin-field full">
            <button className="admin-btn admin-btn-green">
              Update Course
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditCourse;