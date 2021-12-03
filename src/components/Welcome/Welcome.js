import { Link } from 'react-router-dom';
import { IoLogoReact, IoLogoJavascript, IoLogoSass } from 'react-icons/io5';
import { SiRedux, SiWebpack } from 'react-icons/si';
import { FaGithubSquare, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { CgTemplate } from 'react-icons/cg';
import './Welcome.scss';

export default function Welcome() {
   return (
      <main className="Welcome">
         <p className="Welcome__text">
            Добро пожаловать в Kinsey - справочное приложение для веб
            разработки, примеры кода и их описание рядом.
         </p>
         <nav className="Welcome__linksWrapper">
            <Link
               to="https://cold-snowww.github.io/reference-app/links"
               className="Welcome__sectionsLink"
            >
               <FaExternalLinkSquareAlt />
               <p className="Welcome__iconText">Useful links</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/react"
               className="Welcome__sectionsLink"
            >
               <IoLogoReact />
               <p className="Welcome__iconText">React</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/react-patterns"
               className="Welcome__sectionsLink"
            >
               <IoLogoReact />
               <p className="Welcome__iconText">React паттерны</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/redux"
               className="Welcome__sectionsLink"
            >
               <SiRedux />
               <p className="Welcome__iconText">Redux</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/js"
               className="Welcome__sectionsLink"
            >
               <IoLogoJavascript />
               <p className="Welcome__iconText">JavaScript</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/js-browser"
               className="Welcome__sectionsLink"
            >
               <IoLogoJavascript />
               <p className="Welcome__iconText">Browser JavaScript</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/scss"
               className="Welcome__sectionsLink"
            >
               <IoLogoSass />
               <p className="Welcome__iconText">SCSS</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/git"
               className="Welcome__sectionsLink"
            >
               <FaGithubSquare />
               <p className="Welcome__iconText">Git</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/ejs"
               className="Welcome__sectionsLink"
            >
               <CgTemplate />
               <p className="Welcome__iconText">EJS</p>
            </Link>
            <Link
               to="https://cold-snowww.github.io/reference-app/webpack"
               className="Welcome__sectionsLink"
            >
               <SiWebpack />
               <p className="Welcome__iconText">Webpack</p>
            </Link>
         </nav>
      </main>
   );
}
