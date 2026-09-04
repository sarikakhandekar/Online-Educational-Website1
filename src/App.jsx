import "./App.css";
import Navbar from "./Comp/Navbar";
import Footer from "./Comp/Footer";
import Home from "./Home/Home";
import Pricing from "./Pricing/Pricing";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Login from "./Forms/Login";
import Singup from "./Forms/Singup";
import ForgotPass from "./ForgotPassword/ForgotPass";
import Courses from "./Courses/Courses.jsx";
import Bootcamp from "./Courses/Bootcamp";
import CareerGrowth from "./WCU/CareerGrowth";
import FlexibleLearning from "./WCU/FlexibleLearning";
import Certification from "./WCU/Certification";
import PublicLayout from "./Comp/PublicLayout";
import HelpDesk from "./Forms/HelpDesk";
import ProtectedUserRoute from "./Forms/ProtectedUserRoute";
import GuestOnlyRoute from "./Forms/GuestOnlyRoute";
import Error  from "./Error";
import CourseDetail from "./Courses/CourseDetail";
import ProtectedAdminRoute from "./ADMIN/ProtectedAdminRoute";
import Admin from "./ADMIN/Admin";
import Dashboard from "./ADMIN/Dashboard";
import Users from "./ADMIN/Users";
import Course from "./ADMIN/Course";
import AddCourse from "./ADMIN/AddCourse";
import EditCourse from "./ADMIN/EditCourse";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/careergrowth" element={<CareerGrowth />} />
          <Route path="/flexiblelearning" element={<FlexibleLearning />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/course/:id" element={<CourseDetail />} />


          <Route
            path="/login"
            element={
              <GuestOnlyRoute>
                <Login />
              </GuestOnlyRoute>
            }
          />

          <Route
            path="/singup"
            element={
              <GuestOnlyRoute>
                <Singup />
              </GuestOnlyRoute>
            }
          />

          <Route
            path="/help-desk"
            element={
              <ProtectedUserRoute>
                <HelpDesk />
              </ProtectedUserRoute>
            }
          />
        </Route>

        {/* ADMIN  */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />

          {/* COURSES */}
          <Route path="course" element={<Course />} />
          <Route path="course/edit/:id" element={<EditCourse />} />

          <Route path="add-course" element={<AddCourse />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
