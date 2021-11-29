import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './components/PageLayout/PageLayout';

function App() {
   return (
      <BrowserRouter>
         <PageLayout />
      </BrowserRouter>
   );
}

export default App;
