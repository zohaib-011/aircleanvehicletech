import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Panel from './Components/Panel';
 
 
import Footer from './Components/footer';
import About from './Components/About';
import ReactorMessage from './Components/ReactorMessage';
import Contact from './Components/contact';
 
import Login   from './Components/login';
import Signup from './Components/signup';
import Home from './Components/home';
import Faqs from './Components/faqs';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState,Component  } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import RefreshHandler from './Components/RefreshHandler';
import Technalogy from './Components/technalogy';
function App() {
  const [isAuthenticated,setAuthenticated]=useState(false);
  const PrivateRouting=({element})=>{
return isAuthenticated ? element : <Navigate to="/login"/>
  }
  return (
    
    
     
       
       
       <Router>
       <RefreshHandler setIsAuthenticated={setAuthenticated}/>
        <NavBar />
        <Routes>
         
        <Route path="/" element={<Navigate to="/home" />} />

          <Route exact path="/home"  element={ 
            <div>
            <HeroSection/>
           
            {/* <Event/> */}
            
              
             
            <About/>   

            
            <Contact/> 
            <Technalogy/>
            </div>
             
           
        }
          />
          
          <Route exact path="/about" element={ 
         <About/>  
          } />

<Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home2' element={<Home/>}/>

           
           <Route exact path="/contact" element={ 
            <div>
         <Contact/>  
         
         </div>
          } />
           <Route exact path="/faqs" element={ 
         <Faqs/> 
          } />
           <Route exact path="/technalogy" element={ 
        <div> <Technalogy/>
        </div>
          } />


            
           
        </Routes>
        <Footer/>
        </Router>
         
    
  );
}

export default App;
