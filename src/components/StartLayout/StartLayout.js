import './StartLayout.scss';

export default function StartLayout({ header, content, footer }) {
   return (
      <div className="StartLayout">
         <div className="StartLayout__header">{header}</div>
         <div className="StartLayout__main">
            <div className="StartLayout__mainWrapper">{content}</div>
         </div>
         <div className="StartLayout__footer">{footer}</div>
      </div>
   );
}
