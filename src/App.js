import React from 'react';
import { HashRouter } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { Routes, Route } from 'react-router-dom';
import PageScreen from './components/PageScreen/PageScreen';
import reactData from './data/react.json';
import reactPatternsData from './data/react-patterns.json';
import redux from './data/redux.json';
import FrameScreen from './components/FrameScreen/FrameScreen';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route
               path="/"
               element={<WelcomeScreen title="Welcome to Kinsey app!" />}
            />
            <Route
               path="/react"
               element={<PageScreen data={reactData} title="React JS" />}
            />
            <Route
               path="/react-patterns"
               element={
                  <PageScreen data={reactPatternsData} title="React Patterns" />
               }
            />
            <Route
               path="/redux"
               element={<PageScreen data={redux} title="Redux JS" />}
            />
            <Route
               path="/js"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/js-section/section-content.html"
                     title="Java Script"
                  />
               }
            />
            <Route
               path="/js-browser"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/browser-section/section-content.html"
                     title="Java Script in Browser"
                  />
               }
            />
            <Route
               path="/scss"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/scss/section-content.html"
                     title="SCSS"
                  />
               }
            />
            <Route
               path="/git"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/git-section/section-content.html"
                     title="GitHub"
                  />
               }
            />
            <Route
               path="/ejs"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/ejs-section/section-content.html"
                     title="EJS templates"
                  />
               }
            />
            <Route
               path="/webpack"
               element={
                  <FrameScreen
                     link="https://cold-snowww.github.io/reference-app/old/sections/webpack-section/section-content.html"
                     title="Webpack"
                  />
               }
            />
         </Routes>
      </HashRouter>
   );
}

export default App;
