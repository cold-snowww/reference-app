import './Frame.scss';

export default function Frame({ link }) {
   return (
      <iframe
         src={link}
         className="Frame__iframe"
         title="Portal to good old days"
         frameborder="0"
      ></iframe>
   );
}
