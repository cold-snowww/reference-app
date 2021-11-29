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
   return (
      <div className="PageLayout">
         <div className="PageLayout__burger">{burger}</div>
         <div className="PageLayout__controls">{controls}</div>
         <div className="PageLayout__page">
            <div className="PageLayout__wrapper">{page}</div>
         </div>
         <div className="PageLayout__prompt">
            <div className="PageLayout__wrapper">{prompt}</div>
         </div>
         <div className="PageLayout__header">{header}</div>
         <div className="PageLayout__footer">{footer}</div>
         <div className="PageLayout__menu">
            <div className="PageLayout__wrapper">{menu}</div>
         </div>
      </div>
   );
}
