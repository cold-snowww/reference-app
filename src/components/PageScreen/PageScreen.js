import Burger from '../Burger/Burger';
import Controls from '../Controls/Controls';
import Header from '../Header/Header';
import PageLayout from '../PageLayout/PageLayout';
import Footer from '../Footer/Footer';
import './PageScreen.scss';
import Menu from '../Menu/Menu';
import Page from '../Page/Page';
import { useEffect, useState } from 'react';
import Prompt from '../Prompt/Prompt';
import { useDispatch } from 'react-redux';
import { changeData } from '../../redux/reducers/pages/pagesSlice';

export default function PageScreen({ data, title }) {
   const [promptText, setPromptText] = useState('');
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(changeData(data));
   }, [data, dispatch]);

   useEffect(() => {
      document.title = title;
   }, [title]);

   return (
      <PageLayout
         burger={<Burger />}
         controls={<Controls />}
         header={<Header extraClass="PageScreen" />}
         footer={<Footer />}
         menu={<Menu />}
         page={<Page onRefClick={setPromptText} />}
         prompt={<Prompt text={promptText} />}
      />
   );
}
