import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Layouts/Home";
import Contact from "./Layouts/Contact";
import Education from "./Layouts/Education";
import customTheme from "./Utils/customTheme";
import { ThemeProvider } from '@mui/material/styles';
import WorkExperience from './Layouts/WorkExperience';
import Accomplishments from './Layouts/Accomplishments';
import ErrorPage from './Layouts/ErrorPage';
import ScrollToTop from './Utils/ScrollToTop';

function App() {

  // Custom theme set
  const theme = customTheme;

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Home />
      <Education />
      <WorkExperience />
      <Accomplishments />
      <Contact />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
