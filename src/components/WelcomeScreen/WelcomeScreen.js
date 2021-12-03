import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import StartLayout from '../StartLayout/StartLayout';
import Welcome from '../Welcome/Welcome';

export default function WelcomeScreen({ title }) {
   useEffect(() => {
      document.title = title;
   });

   return (
      <StartLayout
         header={<Header bottomText={true} />}
         footer={<Footer />}
         content={<Welcome />}
      />
   );
}
