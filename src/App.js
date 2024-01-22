import {  Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/home/HomeComponent';
import AboutComponent from './Components/about/AboutComponent';
import BlogComponent from './Components/blog/BlogComponent';
import ContactComponent from './Components/contact/ContactComonent';
import AdminDashboardComponent from './Components/admin-dashbord/AdminDashbord';
import GalleryComponent from './Components/gallery/GalleryComponent';
import ServicesComponent from './Components/services/ServicesComponent';
import NavbarComponent from './Components/Layout/Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <NavbarComponent />
 
 <Routes>
   <Route path="/" element={<HomeComponent />} />
   <Route path="/about" element={<AboutComponent />} />
   <Route path="/admin" element={<AdminDashboardComponent />} />
   <Route path="/blog" element={<BlogComponent />} />
   <Route path="/contact" element={<ContactComponent />} />
   <Route path="/gallery" element={<GalleryComponent />} />
   <Route path="/services" element={<ServicesComponent />} />
 </Routes>
    </div>
  );
}

export default App;
