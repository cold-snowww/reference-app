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
         <div className="PageLayout__burger">{burger} burger</div>
         <div className="PageLayout__controls">{controls} controls</div>
         <div className="PageLayout__page">
            <div className="PageLayout__pageWrapper">{page} page</div>
         </div>
         <div className="PageLayout__prompt">
            <div className="PageLayout__promptWrapper">{prompt} prompt</div>
         </div>
         <div className="PageLayout__header">{header} header</div>
         <div className="PageLayout__footer">{footer} footer</div>
         <div className="PageLayout__menu">{menu} menu</div>
      </div>
   );
}
