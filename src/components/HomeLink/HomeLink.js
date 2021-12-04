import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './HomeLink.scss';

export default function HomeLink() {
   return (
      <Link to="/" className="HomeLink">
         <AiOutlineHome />
      </Link>
   );
}
