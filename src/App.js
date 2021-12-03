import React from 'react';
import { HashRouter } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { Routes, Route } from 'react-router-dom';
import PageScreen from './components/PageScreen/PageScreen';
import reactData from './data/react.json';
import reactPatternsData from './data/react-patterns.json';
import redux from './data/redux.json';

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
         </Routes>
      </HashRouter>
   );
}

export default App;
