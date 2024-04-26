// AppRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
// Pages
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import PageHome from '../pages/PageHome';
import IndividualMoviePage from '../pages/IndividualMoviePage';
import PageNotFound from '../pages/PageNotFound';
import { APP_FOLDER_NAME } from '../globals/globals';
//React
import React from 'react';

function AppRouter() {
    return (
      <BrowserRouter basename={`/${APP_FOLDER_NAME}`}> 
          <div className="wrapper">
              <Header/>
              <main>
                  <Routes>
                      <Route path="/" element={<PageHome />} />
                      <Route path="/about" exact element={<PageAbout />} />
                      <Route path="/movie/:id" element={<IndividualMoviePage />} />
                      <Route path="*" element={<PageNotFound />} />    
                      <Route path="/favourite" element={<PageFavourite />} />              
                  </Routes>
              </main>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }

export default AppRouter;