import { useSelector } from 'react-redux';
import { selectKeys } from '../../redux/reducers/pages/pagesSelectors';
import SectionList from '../SectionList/SectionList';
import './Menu.scss';

export default function Menu() {
   const keys = useSelector(selectKeys);
   if (keys) {
      const sections = keys.map(({ sectionTitle: title, pages }) => (
         <SectionList title={title} pages={pages} key={title} />
      ));

      return <div className="Menu">{sections}</div>;
   }
   return null;
}
