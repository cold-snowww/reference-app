/* eslint-disable react/jsx-no-comment-textnodes */
import logo from '../../images/logo.svg';
import './Header.scss';

export default function Header() {
   return (
      <>
         <header className="Header">
            <img
               className="Header__logo"
               src={logo}
               alt="Kinsey reference app"
            />
            <h1 className="Header__title">Kinsey</h1>
            <p className="Header__tagline">
               Reference app for code development
            </p>
         </header>
         <p className="Header__text">// --- code examples --- //</p>
      </>
   );
}
