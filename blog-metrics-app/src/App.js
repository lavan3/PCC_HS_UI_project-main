import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';  
import BlogDashboard from './BlogDashboard';  
import EmptyPage from './emptyPage';
  
const App = () => {  
  return (  
    <div>  
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<BlogDashboard />  }/>
            <Route path="/test" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
      {/* Other components or content */}  
      
    </div>  
  );  
};  
  
export default App;  
