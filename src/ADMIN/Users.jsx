import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/admin/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleStatus = async (user) => {
    await fetch(
      `http://localhost:5000/api/admin/users/${user.id}/status`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !user.is_active })
      }
    );

    fetchUsers(); // refresh
  };

  // 🔍 Search
  const filteredUsers = users.filter((u) =>
  `${u.id} ${u.student_id || ""} ${u.username} ${u.email}`
    .toLowerCase()
    .includes(search.toLowerCase())
);


  return (
    <div className="admin-card">
      <h1>User Management</h1>

      <input
        className="admin-input"
        placeholder="Search by ID, Student ID, Name or Email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="admin-table admin-table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Last Login</th>
            <th>Last Logout</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.student_id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.contact}</td>
              <td>
                {u.last_login
                  ? new Date(u.last_login).toLocaleString()
                  : "-"}
              </td>

              <td>
                {u.last_logout
                  ? new Date(u.last_logout).toLocaleString()
                  : "-"}
              </td>
              <td>{u.is_active ? "Active" : "Deactivated"}</td>
              <td>
                <button
                  className={`admin-btn ${u.is_active
                    ? "admin-btn-red"
                    : "admin-btn-green"
                    }`}
                  onClick={() => toggleStatus(u)}
                >
                  {u.is_active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
