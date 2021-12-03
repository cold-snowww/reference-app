import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectPageTitle } from '../../redux/reducers/pages/pagesSelectors';
import { goBack, goNext } from '../../redux/reducers/pages/pagesSlice';
import pageStatus from '../../redux/reducers/pages/pageStatus';
import './Controls.scss';

export default function Controls() {
   const title = useSelector(selectPageTitle);
   const dispatch = useDispatch();

   let textTitle;
   switch (title) {
      case pageStatus.EMPTY:
         textTitle = 'Начальная страница';
         break;
      case pageStatus.NOT_FOUND:
         textTitle = 'Страница не найдена';
         break;
      default:
         textTitle = title;
         break;
   }

   return (
      <div className="Controls">
         <h3 className="Controls__title">{textTitle}</h3>
         <div className="Controls__buttons">
            <button
               className="Controls__button"
               onClick={() => dispatch(goBack())}
            >
               <MdNavigateBefore />
            </button>
            <button
               className="Controls__button"
               onClick={() => dispatch(goNext())}
            >
               <MdNavigateNext />
            </button>
         </div>
      </div>
   );
}
