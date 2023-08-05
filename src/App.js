import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Login from "./component/Login";
import Curriculum from "./component/admin/Curriculum";
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
import PrivateRoutes from "./routes/PrivateRoutes";
import Profile from "./component/Profile";
import Courses from "./component/admin/Courses";
import InstructorRoutes from "./routes/InstructorRoutes";
import CreateCourse from "./component/admin/CreateCourse";
import EnrolledStudent from "./component/admin/EnrolledStudent";
import Course from "./page/Course";
import Review from "./component/admin/Review";
import PurchasedHistory from "./component/PurchasedHistory";
import UserProfile from "./component/UserProfile";
import ChangePassword from "./component/ChangePassword";
import ResetPassword from "./component/ResetPassword";
import ForgotPassword from "./component/ForgotPassword";
import {  useSelector } from "react-redux";


function App() {


  const auth=useSelector((state)=>state.auth);
  const cart=useSelector((state)=>state.cart);

  
  
  
  
  return (
    <BrowserRouter>
      <Navbar auth={auth}/>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/teach-with-us" element={<TeachWithUs />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/student/register" element={<Student />} />
        <Route path="/instructor/register" element={<Instructor />} />
        <Route path="/forgot-password/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/auth" element={<PrivateRoutes auth={auth} />}>
          <Route path="profile" element={<Profile/>} />
          <Route path="course-content" element={<CourseContent />} />
          <Route path="instructor" element={<AdminRoutes />} />
          <Route path="course/play/:id" element={<Course />} />
          <Route path="purchase-history" element={<PurchasedHistory />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="instructor" element={<InstructorRoutes  auth={auth}/>} >

          <Route path="overview" element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="curriculum/:id" element={<Curriculum />} />
          <Route path="createCourse" element={<CreateCourse />} />
          <Route path="students" element={<EnrolledStudent/>} />
          <Route path="course/review/:id" element={<Review/>} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
