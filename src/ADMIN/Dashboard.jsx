const Dashboard = () => {
  const recent = [
    { id: 101, name: "Rahul", course: "Full Stack", date: "12 Aug" },
    { id: 102, name: "Amit", course: "UI/UX", date: "13 Aug" }
  ];

  return (
    <>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div className="admin-card">
          <h3>Total Users</h3>
          <h2>120</h2>
        </div>
        <div className="admin-card">
          <h3>Total Courses</h3>
          <h2>8</h2>
        </div>
      </div>

      <div className="admin-card">
        <h3>Recent Enrollments</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recent.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.course}</td>
                <td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
