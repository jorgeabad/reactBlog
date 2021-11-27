import React from 'react';
import logo from './logo.svg';
import Home from './home';
import PostContenido from './post';
//import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
      
    
      <Route path="reactblog/blogs/:_id" element={<PostContenido/>}>
  
              
            </Route>
     
            <Route path="reactblog/" element={<Home/>}>
  
              
  </Route>

     
      </Routes>
      
      </Router>
            
      </header>
    </div>
  );
}

export default App;
