import './FrameLayout.scss';

export default function FrameLayout({ header, frame, homeLink, footer }) {
   return (
      <div className="FrameLayout">
         <div className="FrameLayout__header">{header}</div>
         <div className="FrameLayout__homeLink">{homeLink}</div>
         <div className="FrameLayout__frame">{frame}</div>
         <div className="FrameLayout__footer">{footer}</div>
      </div>
   );
}
