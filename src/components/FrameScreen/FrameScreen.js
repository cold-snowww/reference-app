import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Frame from '../Frame/Frame';
import FrameLayout from '../FrameLayout/FrameLayout';
import Header from '../Header/Header';
import HomeLink from '../HomeLink/HomeLink';
import './FrameScreen.scss';

export default function FrameScreen({ link, title }) {
   useEffect(() => {
      document.title = title;
   }, [title]);

   return (
      <FrameLayout
         header={<Header extraClass="FrameScreen" />}
         homeLink={<HomeLink />}
         frame={<Frame link={link} />}
         footer={<Footer />}
      />
   );
}
