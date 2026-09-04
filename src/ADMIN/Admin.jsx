// import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Admin.css";

// const Admin = () => {
//   const location = useLocation();
//   const navigate = useNavigate();


//   const isCourseActive =
//     location.pathname.startsWith("/admin/course") ||
//     location.pathname.startsWith("/admin/add-course");

//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (isCourseActive) setOpen(true);
//   }, [isCourseActive]);

//   const handleLogout = () => {
//     navigate("/login", { replace: true });
//   }

//   return (
//     <div className="admin-root">
//       <div className="admin-sidebar">
//         <h2 className="admin-title">Admin Panel</h2>

//         <NavLink to="dashboard" end className="admin-link">
//           Dashboard
//         </NavLink>

//         <NavLink to="users" end className="admin-link">
//           Users
//         </NavLink>

//         <div
//           className={`admin-dropdown ${isCourseActive ? "active" : ""}`}
//           onClick={() => setOpen(!open)}
//         >
//           Courses ▾
//         </div>

//         {open && (
//           <div className="admin-dropdown-menu">
//             <NavLink to="add-course" className="admin-link">
//               Add Course
//             </NavLink>

//             <NavLink to="course" className="admin-link">
//               View/Edit Course
//             </NavLink>
//           </div>
//         )}

//         <button className="admin-logout" onClick={handleLogout}>Logout</button>
//       </div>

//       <div className="admin-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Admin;

import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isCourseActive =
    location.pathname.startsWith("/admin/course") ||
    location.pathname.startsWith("/admin/add-course");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isCourseActive) {
      setOpen(true);
    }
  }, [isCourseActive]);

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="admin-root">
      <div className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>

        <NavLink to="dashboard" end className="admin-link">
          Dashboard
        </NavLink>

        <NavLink to="users" end className="admin-link">
          Users
        </NavLink>

        <div
          className={`admin-dropdown ${isCourseActive ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          Courses ▾
        </div>

        {open && (
          <div className="admin-dropdown-menu">
            <NavLink to="add-course" className="admin-link">
              Add Course
            </NavLink>

            <NavLink to="course" className="admin-link">
              View/Edit Course
            </NavLink>
          </div>
        )}

        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;