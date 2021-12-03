import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { selectMenuStatus } from '../../redux/reducers/pages/pagesSelectors';
import { changeMenuStatus } from '../../redux/reducers/pages/pagesSlice';
import './PageLayout.scss';

export default function PageLayout({
   burger,
   controls,
   page,
   prompt,
   header,
   footer,
   menu,
}) {
   const ref = useRef();
   const dispatch = useDispatch();
   const menuStatus = useSelector(selectMenuStatus);
   const menuOpenClass = menuStatus ? ' menuOpened' : '';

   return (
      <div className="PageLayout">
         <div
            className={'PageLayout__burger' + menuOpenClass}
            onClick={() => dispatch(changeMenuStatus())}
         >
            {burger}
         </div>
         <div className="PageLayout__controls">{controls}</div>
         <div className="PageLayout__page">
            <div className="PageLayout__wrapper">{page}</div>
         </div>
         <div className="PageLayout__prompt">
            <div className="PageLayout__wrapper">{prompt}</div>
         </div>
         <div className="PageLayout__header">{header}</div>
         <div className="PageLayout__footer">{footer}</div>
         <CSSTransition in={menuStatus} timeout={300} nodeRef={ref}>
            <div className="PageLayout__menu" ref={ref}>
               <div className="PageLayout__wrapper">{menu}</div>
            </div>
         </CSSTransition>
      </div>
   );
}
