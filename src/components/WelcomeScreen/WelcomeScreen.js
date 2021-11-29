import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import StartLayout from '../StartLayout/StartLayout';
import Welcome from '../Welcome/Welcome';

export default function WelcomeScreen() {
   return (
      <StartLayout
         header={<Header />}
         footer={<Footer />}
         content={<Welcome />}
      />
   );
}
