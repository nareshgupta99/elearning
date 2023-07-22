import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Curriculum from "./component/admin/Curriculum";
import Player from "./component/Player";
import CourseContent from "./component/CourseContent";
import Overview from "./component/admin/Overview";
import Cart from "./component/Cart";
import TeachWithUs from "./component/admin/TeachWithUs";
import Instructor from "./component/Instructor";
import Student from "./component/Student";
import Logout from "./component/Logout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminRoutes from "./routes/PrivateRoutes";
import InstructorDashboard from "./component/admin/InstructorDashboard";
import PrivateRoutes from "./routes/PrivateRoutes";
import Profile from "./component/Profile";
import Courses from "./component/admin/Courses";
import InstructorRoutes from "./routes/InstructorRoutes";
import CreateCourse from "./component/admin/CreateCourse";
import EnrolledStudent from "./component/admin/EnrolledStudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="teach-with-us" element={<TeachWithUs />} />
        <Route path="cart" element={<Cart />} />
         <Route path="student/register" element={<Student />} />
        <Route path="instructor/register" element={<Instructor />} />

        <Route path="auth" element={<PrivateRoutes />}>
           <Route path="profile" element={<Profile/>} />
          <Route path="course-content" element={<CourseContent />} />
          <Route path="instructor" element={<AdminRoutes />} />
          <Route path="player" element={<Player />} />

        </Route>
        <Route path="instructor" element={<InstructorRoutes />} >

          <Route path="overview" element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="curriculum/:id" element={<Curriculum />} />
          <Route path="createCourse" element={<CreateCourse />} />
          <Route path="students" element={<EnrolledStudent/>} />
       
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
