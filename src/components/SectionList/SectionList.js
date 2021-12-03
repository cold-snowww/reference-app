import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { showPage } from '../../redux/reducers/pages/pagesSlice';
import './SectionList.scss';

export default function SectionList({ title, pages }) {
   const [open, setOpen] = useState(false);
   const dispatch = useDispatch();
   const ref = useRef();

   const changePage = useCallback(
      (key) => {
         dispatch(showPage(key));
      },
      [dispatch]
   );

   const links = pages.map(({ key, title }) => (
      <li
         className="SectionList__link"
         onClick={() => changePage(key)}
         key={key}
      >
         {title}
      </li>
   ));

   return (
      <div className="SectionList">
         <h3
            className="SectionList__header"
            onClick={() => setOpen((prev) => !prev)}
         >
            {title}
         </h3>
         <CSSTransition
            in={open}
            timeout={250}
            nodeRef={ref}
            mountOnEnter
            unmountOnExit
         >
            <ul className="SectionList__list" ref={ref}>
               {links}
            </ul>
         </CSSTransition>
      </div>
   );
}
