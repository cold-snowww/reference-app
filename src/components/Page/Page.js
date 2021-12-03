import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/reducers/pages/pagesSelectors';
import pageStatus from '../../redux/reducers/pages/pageStatus';
import './Page.scss';

export default function Page({ onRefClick }) {
   const data = useSelector(selectPage);
   const ref = useRef();

   useEffect(() => {
      ref.current.scrollTop = 0;
   }, [data]);

   let htmlForRender;
   switch (data) {
      case pageStatus.EMPTY:
         htmlForRender = 'Пожалуйста, выберите интересующий раздел в меню...';
         break;
      case pageStatus.NOT_FOUND:
         htmlForRender =
            'К сожалению возникла ошибка :(, данной страницы не существует...';
         break;
      default:
         htmlForRender = data;
         break;
   }

   const pageData = { __html: htmlForRender };

   const onPageClick = (e) => {
      if (e.target.matches('span[data-reference]')) {
         const text = e.target.dataset.reference;
         onRefClick(text);
      }
   };

   return (
      <div
         className="Page"
         dangerouslySetInnerHTML={pageData}
         onClick={onPageClick}
         ref={ref}
      ></div>
   );
}
