import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Course = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5000/api/admin/courses");
    const data = await res.json();
    setCourses(data);
  };

  const toggleStatus = async (id, current) => {
    await fetch(`http://localhost:5000/api/admin/course/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_active: current ? 0 : 1 })
    });

    fetchCourses();
  };


  return (
    <div className="admin-card">
      <h1>Courses</h1>

      <table className="admin-table admin-table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.price}</td>
              <td>
                <button
                  className="admin-btn admin-btn-blue"
                  onClick={() =>
                    navigate(`/admin/course/edit/${c.id}?mode=view`)
                  }
                >
                  View
                </button>{" "}
                <button
                  className="admin-btn admin-btn-green"
                  onClick={() =>
                    navigate(`/admin/course/edit/${c.id}?mode=edit`)
                  }
                >
                  Edit
                </button>
                <button
                  className={c.is_active ? "disable-btn" : "enable-btn"}
                  onClick={() => toggleStatus(c.id, c.is_active)}
                >
                  {c.is_active ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}

          {courses.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No courses added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
