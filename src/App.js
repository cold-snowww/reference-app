import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { Routes, Route } from 'react-router-dom';
import PageScreen from './components/PageScreen/PageScreen';
import reactData from './data/react.json';
import reactPatternsData from './data/react-patterns.json';
import redux from './data/redux.json';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="https://cold-snowww.github.io/reference-app/"
               element={<WelcomeScreen title="Welcome to Kinsey app!" />}
            />
            <Route
               path="https://cold-snowww.github.io/reference-app/react"
               element={<PageScreen data={reactData} title="React JS" />}
            />
            <Route
               path="https://cold-snowww.github.io/reference-app/react-patterns"
               element={
                  <PageScreen data={reactPatternsData} title="React Patterns" />
               }
            />
            <Route
               path="https://cold-snowww.github.io/reference-app/redux"
               element={<PageScreen data={redux} title="Redux JS" />}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
