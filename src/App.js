import './App.css';
import React from "react";
import {Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/Blogpage";
import Createpost from "./Pages/Createpost";
import Editpost from "./Pages/Editpost";
import Singlepage from "./Pages/Singlepage";
import NotFoundPage from "./Pages/NotFoundPage";

import Layout from './components/Layout'

function App() {
  return (
      <div >
         <Routes>
             <Route path="/" element={<Layout />}>
                 <Route index element={<HomePage />}/>
                 <Route path="about" element={<AboutPage />}/>
                 <Route path="posts" element={<BlogPage />}/>
                 <Route path="posts/:id" element={<Singlepage />}/>
                 <Route path="posts/:id/edit" element={<Editpost />}/>
                 <Route path="posts/new" element={<Createpost />}/>
                 <Route path="*" element={<NotFoundPage />}/>
             </Route>

         </Routes>

      </div>
  );
}

export default App;
