import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ErrorPage from './Pages/errorPage/errorPage';
import Category from './Pages/Categorey/Category';
import ProductDetails from './Components/ProductDetails/ProductDetails';



function App() {
  return (
    <>

      <Router>
          <Routes>
          
            <Route path='/' element={<Home />}/>
         
            <Route path='/contactus' element={<ContactUs />}/>
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path='/Category' element={<Category/>}/>
  
            <Route path='/services' element={<Services />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
      </Router>
    </>
  );
}


export default App;
