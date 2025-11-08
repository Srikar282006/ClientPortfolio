import React from 'react';
import HomePage from '../src/pages/HomePage'
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectDetailsPage from './pages/ProjectDetailPage'
import { ThemeProvider } from './components/ThemeContext';
import {BrowserRouter  as Router,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <ThemeProvider>   
 <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/experience" element={<ExperiencePage/>}/>
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
  </Router>
  </ThemeProvider>   
    </>
  );
}

export default App;
