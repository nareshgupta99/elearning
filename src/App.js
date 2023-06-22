import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Registration from './component/Registration';
import Login from './component/Login';
import Curriculum from './component/admin/Curriculum';
import Player from './component/Player';
import CourseContent from './component/CourseContent';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/login' element={<Login />} />
    <Route path='/curriculum' element={<Curriculum />} />
    <Route path='/player' element={<Player />} />
    <Route path='/course-content' element={<CourseContent />} />
   </Routes>
    
   
   </BrowserRouter>
  );
}

export default App;
