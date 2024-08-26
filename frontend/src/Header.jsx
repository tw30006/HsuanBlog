import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
      <Link to="/" className="logo">myLogo</Link>
      <nav className="menu">
        <Link to="/login">登入</Link>
        <Link><FiMenu /></Link>
      </nav>
     </header>
    )
}